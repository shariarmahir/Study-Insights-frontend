"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/layout/social-links";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/logo.png"
            alt="Study Insights"
            width={224}
            height={56}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <SocialLinks />
          <Button asChild variant="primary" size="lg">
            <Link href="/apply">Start Your Application</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-primary/80 hover:bg-muted hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="primary" className="mt-2 w-full">
            <Link href="/apply" onClick={() => setOpen(false)}>
              Start Your Application
            </Link>
          </Button>
          <SocialLinks className="mt-4 justify-center" />
        </nav>
      </div>
    </header>
  );
}
