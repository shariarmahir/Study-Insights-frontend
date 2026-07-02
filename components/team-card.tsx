"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Card className="overflow-hidden border-border/60 bg-card p-0">
      <div className="relative aspect-3/4 w-full bg-primary/10">
        {imageFailed ? (
          <div className="flex size-full items-center justify-center">
            <span className="text-4xl font-semibold text-primary/40">
              {getInitials(name)}
            </span>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <div className="p-5 text-center">
        <p className="font-semibold text-primary">{name}</p>
        <p className="mt-1 text-sm text-primary/60">{role}</p>
      </div>
    </Card>
  );
}
