import { FileText, Clock, Plane, CheckCircle2 } from "lucide-react";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { ApplicationsChart } from "@/components/admin/applications-chart";
import { ApplicationsTable } from "@/components/admin/applications-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { applications, dashboardStats } from "@/lib/admin-data";

const statCards = [
  {
    label: "Total Applications",
    value: dashboardStats.totalApplications,
    icon: FileText,
  },
  {
    label: "New This Week",
    value: dashboardStats.newThisWeek,
    icon: Clock,
  },
  {
    label: "In Visa Stage",
    value: dashboardStats.inVisaStage,
    icon: Plane,
  },
  {
    label: "Approved",
    value: dashboardStats.approved,
    icon: CheckCircle2,
  },
];

export default function AdminOverviewPage() {
  return (
    <>
      <AdminTopbar title="Overview" />

      <div className="flex flex-1 flex-col gap-6 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => (
            <Card key={stat.label} className="border-border/60">
              <CardContent className="flex items-center justify-between pt-6">
                <div>
                  <p className="text-sm text-primary/60">{stat.label}</p>
                  <p className="mt-1 text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                </div>
                <div className="flex size-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <stat.icon className="size-5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-primary">
              Applications Trend
            </CardTitle>
            <CardDescription>
              Monthly application volume over the last six months.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ApplicationsChart />
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-primary">
              Recent Applications
            </CardTitle>
            <CardDescription>
              Latest student applications submitted through the website.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ApplicationsTable applications={applications} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
