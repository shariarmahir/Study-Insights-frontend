import type { Metadata } from "next";
import { StudentApplicationForm } from "@/components/forms/student-application-form";

export const metadata: Metadata = {
  title: "Student Application | Study Insights",
  description:
    "Start your study abroad journey with Study Insights. Tell us about yourself and we'll build a plan around your goals.",
};

export default function ApplyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Student Application Form
        </h1>
        <p className="mt-4 text-primary/70">
          Fill in your details and our admission team will get back to you
          within 24 hours with a real, honest plan.
        </p>
      </div>

      <div className="mt-10">
        <StudentApplicationForm />
      </div>
    </section>
  );
}
