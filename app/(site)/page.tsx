import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { TeamCard } from "@/components/team-card";
import { DestinationsShowcase } from "@/components/destinations-showcase";
import { ScholarshipsList } from "@/components/scholarships-list";
import { HeroImageStrip } from "@/components/hero-image-strip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site-config";
import {
  heroStats,
  featureStrip,
  popularFields,
  journeySteps,
  testimonials,
  faqs,
} from "@/lib/homepage-data";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-secondary/40 sm:aspect-16/6 sm:min-h-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,var(--accent)/12%,transparent_70%)]"
        />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge className="mx-auto w-fit rounded-full border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
            Educational Consultancy Firm
          </Badge>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl leading-tight font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            One of the most trusted study abroad consultancies for
            <span className="text-accent"> Bangladeshi students</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary/70">
            Your ultimate guide to studying abroad. We are not selling
            dreams — we build trust, and we provide trust, from country
            selection all the way to your visa approval.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/apply">
                Apply Now
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <Link href="/apply">Free Consultation</Link>
            </Button>
          </div>

          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-bold text-accent sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-primary/60 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <HeroImageStrip />
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featureStrip.map((feature) => (
              <div key={feature.label} className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="size-6" />
                </div>
                <div>
                  <p className="font-bold text-primary">{feature.value}</p>
                  <p className="text-sm text-primary/60">{feature.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-primary/70">
              From your first consultation to your first day on campus, we
              manage the process so you can focus on your future.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            <div>
              <h3 className="text-xl font-semibold text-primary">
                {siteConfig.services[0].title}
              </h3>
              <p className="mt-2 max-w-2xl text-base text-primary/70">
                {siteConfig.services[0].description}
              </p>
              <DestinationsShowcase />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">
                {siteConfig.services[1].title}
              </h3>
              <p className="mt-2 max-w-2xl text-base text-primary/70">
                {siteConfig.services[1].description}
              </p>
              <ScholarshipsList />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Fields */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Popular Fields of Study
            </h2>
            <p className="mt-4 text-primary/70">
              Explore the subject areas our students pursue most, across
              partner universities worldwide.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {popularFields.map((field) => (
              <div
                key={field.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card p-6 text-center transition-shadow hover:shadow-md"
              >
                <field.icon className="size-8 text-accent" />
                <p className="text-sm font-medium text-primary">
                  {field.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Roadmap */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Your Journey With Us
            </h2>
            <p className="mt-4 text-primary/70">
              Eight steps from your first conversation to landing at your new
              university.
            </p>
          </div>

          <ol className="mt-14 space-y-8">
            {journeySteps.map((step, index) => (
              <li
                key={step.title}
                className={cn(
                  "flex flex-col gap-4 sm:flex-row sm:items-start",
                  index % 2 === 1 && "sm:flex-row-reverse sm:text-right"
                )}
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div
                  className={cn(
                    "flex-1 rounded-2xl border border-border/60 bg-card p-6",
                    index % 2 === 1 && "sm:text-right"
                  )}
                >
                  <h3 className="font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mt-4 text-primary-foreground/70">
              Real stories from students we&apos;ve supported on their study
              abroad journey.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="border-primary-foreground/10 bg-primary-foreground/5"
              >
                <CardContent className="pt-6">
                  <Quote className="size-8 text-accent" />
                  <p className="mt-4 text-sm text-primary-foreground/80">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-primary-foreground/10 pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-primary-foreground/60">
                      {testimonial.program}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-4 text-primary/70">
              A small, dedicated team that stays accountable to every student
              we work with.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.team.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-primary/70">
              Straight answers to the questions we hear most.
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base font-medium text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Ready to start your study abroad journey?
          </h2>
          <p className="mt-4 text-primary/70">
            Tell us about yourself and we&apos;ll get back to you with a plan
            built around your goals — not a sales pitch.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/apply">
                Fill the Student Form
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <Link href="/community">Explore the Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
