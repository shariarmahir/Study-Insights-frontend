import { Construction } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ComingSoon({ title }: { title: string }) {
  return (
    <Card className="border-border/60 border-dashed">
      <CardContent className="flex flex-col items-center gap-3 py-20 text-center">
        <Construction className="size-10 text-accent" />
        <p className="font-semibold text-primary">{title} coming soon</p>
        <p className="max-w-sm text-sm text-primary/60">
          This module is planned for a future release of the SuperAdmin
          dashboard.
        </p>
      </CardContent>
    </Card>
  );
}
