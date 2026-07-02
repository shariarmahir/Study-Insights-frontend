import Image from "next/image";
import { heroImages } from "@/lib/homepage-data";

export function HeroImageStrip() {
  return (
    <div className="group relative mt-14 overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max gap-4 animate-[marquee_50s_linear_infinite] group-hover:paused">
        {[...heroImages, ...heroImages].map((image, index) => (
          <div
            key={`${image.file}-${index}`}
            className="relative h-40 w-64 shrink-0 overflow-hidden rounded-2xl border border-primary/10 shadow-sm sm:h-48 sm:w-80"
          >
            <Image
              src={`/images/hero/${image.file}`}
              alt={image.alt}
              fill
              sizes="320px"
              className="object-cover"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
