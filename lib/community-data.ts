export type CommunityThread = {
  id: string;
  title: string;
  country: string;
  category: "Visa" | "Scholarship" | "University Life" | "Application";
  author: string;
  replies: number;
  excerpt: string;
};

export const communityThreads: CommunityThread[] = [
  {
    id: "1",
    title: "DAAD scholarship interview — what to expect?",
    country: "Germany",
    category: "Scholarship",
    author: "Tanvir R.",
    replies: 12,
    excerpt:
      "Got shortlisted for the DAAD interview next month. Would love to hear from anyone who's been through it recently.",
  },
  {
    id: "2",
    title: "Student visa processing time from Bangladesh",
    country: "Canada",
    category: "Visa",
    author: "Nusrat J.",
    replies: 8,
    excerpt:
      "Submitted my study permit application three weeks ago. Anyone have a recent timeline to share?",
  },
  {
    id: "3",
    title: "Erasmus Mundus joint master's — application tips",
    country: "Netherlands",
    category: "Application",
    author: "Rafiul H.",
    replies: 21,
    excerpt:
      "Sharing my statement of purpose structure that worked for two Erasmus Mundus programs.",
  },
  {
    id: "4",
    title: "First semester at a UK university — budgeting reality",
    country: "United Kingdom",
    category: "University Life",
    author: "Farhana A.",
    replies: 15,
    excerpt:
      "Here's what I actually spent in my first semester in Manchester, broken down by category.",
  },
  {
    id: "5",
    title: "Chevening vs. Commonwealth — which one fits your profile?",
    country: "United Kingdom",
    category: "Scholarship",
    author: "Imran K.",
    replies: 9,
    excerpt:
      "Comparing eligibility, funding coverage, and timelines between the two scholarships.",
  },
  {
    id: "6",
    title: "Finding accommodation before arriving in Australia",
    country: "Australia",
    category: "University Life",
    author: "Sadia M.",
    replies: 6,
    excerpt:
      "What worked for me — university housing vs. private rentals near campus.",
  },
];

export const communityCategories = [
  "All",
  "Visa",
  "Scholarship",
  "University Life",
  "Application",
] as const;
