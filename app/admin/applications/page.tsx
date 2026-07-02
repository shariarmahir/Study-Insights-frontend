import { AdminTopbar } from "@/components/admin/admin-topbar";
import { ApplicationsTable } from "@/components/admin/applications-table";
import { Card, CardContent } from "@/components/ui/card";
import { applications } from "@/lib/admin-data";

export default function AdminApplicationsPage() {
  return (
    <>
      <AdminTopbar title="Applications" />

      <div className="flex flex-1 flex-col gap-6 p-4 sm:p-6">
        <Card className="border-border/60">
          <CardContent className="pt-6">
            <ApplicationsTable applications={applications} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
