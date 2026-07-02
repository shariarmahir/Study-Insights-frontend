import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.16A4.9 4.9 0 0 0 2.53 5.5c-.25.64-.42 1.37-.47 2.43C2.01 8.99 2 9.33 2 12.06s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.64.25 1.37.42 2.43.47 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.16 4.9 4.9 0 0 0 1.16-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.16-1.77A4.9 4.9 0 0 0 18.59.53c-.64-.25-1.37-.42-2.43-.47C15.1.01 14.76 0 12.04 0Zm0 1.98c2.67 0 2.99.01 4.04.06.98.04 1.51.21 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.13.35.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.51-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.35.13-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.51-.21-1.86-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.13-.35-.3-.88-.34-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.21-1.51.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.35-.13.88-.3 1.86-.34 1.05-.05 1.37-.06 4.04-.06Z" />
      <path d="M12 6.87a5.19 5.19 0 1 0 0 10.38 5.19 5.19 0 0 0 0-10.38Zm0 8.56a3.37 3.37 0 1 1 0-6.74 3.37 3.37 0 0 1 0 6.74ZM18.41 6.67a1.21 1.21 0 1 1-2.42 0 1.21 1.21 0 0 1 2.42 0Z" />
    </svg>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href={siteConfig.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Study Insights on Facebook"
        className="text-primary/60 transition-colors hover:text-accent"
      >
        <FacebookIcon className="size-5" />
      </a>
      <a
        href={siteConfig.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Study Insights on Instagram"
        className="text-primary/60 transition-colors hover:text-accent"
      >
        <InstagramIcon className="size-5" />
      </a>
    </div>
  );
}
