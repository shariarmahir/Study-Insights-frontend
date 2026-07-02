import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { footerLinks } from "@/lib/homepage-data";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-sidebar-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
        <div className="md:col-span-3 lg:col-span-2">
          <Image
            src="/images/logo/logowhite.png"
            alt="Study Insights"
            width={233}
            height={64}
            className="h-11 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            {siteConfig.description}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-accent" />
              {siteConfig.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-accent" />
              <a href={`tel:+880${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {siteConfig.address}
              </a>
            </li>
          </ul>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">
              {heading}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              {links.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Study Insights. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            <Button asChild variant="default" size="sm">
              <Link href="/admin">Admin Dashboard</Link>
            </Button>
            <p>We build trust. We provide trust.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
