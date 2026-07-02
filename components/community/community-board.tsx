"use client";

import { useMemo, useState } from "react";
import { MessageCircle, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  communityCategories,
  communityThreads,
  type CommunityThread,
} from "@/lib/community-data";
import { cn } from "@/lib/utils";

export function CommunityBoard() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof communityCategories)[number]>("All");

  const threads = useMemo(() => {
    if (activeCategory === "All") return communityThreads;
    return communityThreads.filter(
      (thread) => thread.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {communityCategories.map((category) => (
          <Button
            key={category}
            type="button"
            size="sm"
            variant={category === activeCategory ? "primary" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {threads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );
}

function ThreadCard({ thread }: { thread: CommunityThread }) {
  return (
    <Card className="border-border/60 bg-card transition-shadow hover:shadow-md">
      <CardHeader className="flex-row items-start justify-between gap-2 space-y-0">
        <Badge
          className={cn(
            "border-transparent bg-primary/10 text-primary",
            thread.category === "Scholarship" && "bg-accent/10 text-accent"
          )}
        >
          {thread.category}
        </Badge>
        <span className="flex items-center gap-1 text-xs text-primary/60">
          <MapPin className="size-3.5" />
          {thread.country}
        </span>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-primary">{thread.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-primary/70">
          {thread.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-primary/60">
          <span>by {thread.author}</span>
          <span className="flex items-center gap-1">
            <MessageCircle className="size-3.5" />
            {thread.replies} replies
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
