"use client";

import { useState } from "react";
import * as Flags from "country-flag-icons/react/3x2";
import { ChevronDown, MessageCircle } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { destinations } from "@/lib/homepage-data";
import { whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function DestinationCard({
  destination,
  isOpen,
  onOpenChange,
}: {
  destination: (typeof destinations)[number];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const Flag = Flags[
    destination.countryCode as keyof typeof Flags
  ] as React.ComponentType<{ className?: string; title?: string }>;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={onOpenChange}
      className={cn(
        "w-40 shrink-0 rounded-2xl border transition-colors",
        isOpen
          ? "border-accent/40 bg-card shadow-sm"
          : "border-border/60 hover:border-accent/30 hover:bg-card/60"
      )}
    >
      <CollapsibleTrigger className="flex w-full flex-col items-center gap-3 p-6 text-center outline-none">
        <Flag
          title={destination.country}
          className="h-8 w-11 rounded-sm object-cover shadow-sm"
        />
        <span className="text-sm font-medium text-primary">
          {destination.country}
        </span>
        <ChevronDown
          className={cn(
            "size-4 text-primary/40 transition-transform",
            isOpen && "rotate-180 text-accent"
          )}
        />
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <div className="space-y-4 border-t border-border/60 p-5 text-center">
          <p className="text-xs text-primary/70">{destination.description}</p>
          <Button asChild size="sm" className="w-full">
            <a
              href={whatsappLink(
                `Hi Study Insights, I'm interested in studying in ${destination.country}. Can you tell me more?`
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              Explore
            </a>
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function DestinationsShowcase() {
  const [openCountry, setOpenCountry] = useState<string | null>(null);
  const isPaused = openCountry !== null;

  return (
    <div className="group relative mt-10 overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={cn(
          "flex w-max gap-4 py-1 animate-[marquee_40s_linear_infinite]",
          "group-hover:paused",
          isPaused && "paused"
        )}
      >
        {[...destinations, ...destinations].map((destination, index) => (
          <DestinationCard
            key={`${destination.country}-${index}`}
            destination={destination}
            isOpen={openCountry === `${destination.country}-${index}`}
            onOpenChange={(open) =>
              setOpenCountry(open ? `${destination.country}-${index}` : null)
            }
          />
        ))}
      </div>
    </div>
  );
}
