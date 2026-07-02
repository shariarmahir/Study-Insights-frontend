import { Bell } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function AdminTopbar({ title }: { title: string }) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-border px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-5" />
        <h1 className="text-lg font-semibold text-primary">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="size-5" />
        </Button>
        <Avatar className="size-9">
          <AvatarFallback className="bg-primary text-primary-foreground">
            SA
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
