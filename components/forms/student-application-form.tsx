"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const destinationCountries = [
  "Germany",
  "United Kingdom",
  "Canada",
  "Australia",
  "United States",
  "Netherlands",
  "Sweden",
  "Other",
];

const studyLevels = ["Bachelor's", "Master's", "PhD", "Language Course"];

const scholarshipInterests = [
  "Erasmus Mundus",
  "DAAD",
  "Chevening",
  "Fulbright",
  "Not sure yet",
  "Not interested",
];

type FormStatus = "idle" | "submitting" | "success";

export function StudentApplicationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    await fetch("/api/student-applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => null);

    setStatus("success");
  }

  if (status === "success") {
    return (
      <Card className="border-border/60 bg-card">
        <CardContent className="flex flex-col items-center gap-4 py-16 text-center">
          <CheckCircle2 className="size-14 text-accent" />
          <h3 className="text-2xl font-bold text-primary">
            Application received
          </h3>
          <p className="max-w-sm text-primary/70">
            Thank you for trusting Study Insights. Our admission team will
            reach out to you within 24 hours.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/60 bg-card">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset className="space-y-4">
            <legend className="text-sm font-semibold tracking-wide text-accent uppercase">
              Personal Information
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="+880 1XXXXXXXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input id="whatsapp" name="whatsapp" type="tel" placeholder="+880 1XXXXXXXXX" />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-sm font-semibold tracking-wide text-accent uppercase">
              Study Preferences
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="destination">Preferred Country</Label>
                <Select name="destination" required>
                  <SelectTrigger id="destination" className="w-full">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinationCountries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="level">Study Level</Label>
                <Select name="level" required>
                  <SelectTrigger id="level" className="w-full">
                    <SelectValue placeholder="Select a level" />
                  </SelectTrigger>
                  <SelectContent>
                    {studyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="scholarship">Scholarship Interest</Label>
                <Select name="scholarship">
                  <SelectTrigger id="scholarship" className="w-full">
                    <SelectValue placeholder="Select a scholarship segment" />
                  </SelectTrigger>
                  <SelectContent>
                    {scholarshipInterests.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-sm font-semibold tracking-wide text-accent uppercase">
              Academic Background
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="lastInstitution">Last Institution</Label>
                <Input id="lastInstitution" name="lastInstitution" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cgpa">CGPA / Result</Label>
                <Input id="cgpa" name="cgpa" required placeholder="e.g. 3.7 / 4.0" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Anything else we should know?</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your goals, timeline, or questions."
              />
            </div>
          </fieldset>

          <Button
            type="submit"
            size="lg"
            className="h-12 w-full text-base"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
