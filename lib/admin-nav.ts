import {
  LayoutDashboard,
  Users,
  FileText,
  GraduationCap,
  MessageSquare,
  Settings,
} from "lucide-react";

export const adminNav = [
  { title: "Overview", href: "/admin", icon: LayoutDashboard },
  { title: "Applications", href: "/admin/applications", icon: FileText },
  { title: "Students", href: "/admin/students", icon: Users },
  { title: "Scholarships", href: "/admin/scholarships", icon: GraduationCap },
  { title: "Community", href: "/admin/community", icon: MessageSquare },
  { title: "Settings", href: "/admin/settings", icon: Settings },
] as const;
