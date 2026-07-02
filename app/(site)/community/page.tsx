import type { Metadata } from "next";
import { Users } from "lucide-react";
import { CommunityBoard } from "@/components/community/community-board";

export const metadata: Metadata = {
  title: "Student Community | Study Insights",
  description:
    "Connect with fellow students who are going abroad for study. Discuss visas, scholarships, applications, and university life.",
};

export default function CommunityPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Users className="size-7" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Student Community
        </h1>
        <p className="mt-4 text-primary/70">
          A space for interested students going abroad for study to share
          experiences, ask questions, and support each other — moderated by
          the Study Insights team.
        </p>
      </div>

      <div className="mt-12">
        <CommunityBoard />
      </div>
    </section>
  );
}
