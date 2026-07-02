import { AdminTopbar } from "@/components/admin/admin-topbar";
import { ComingSoon } from "@/components/admin/coming-soon";

export default function AdminScholarshipsPage() {
  return (
    <>
      <AdminTopbar title="Scholarships" />
      <div className="flex flex-1 flex-col gap-6 p-4 sm:p-6">
        <ComingSoon title="Scholarship management" />
      </div>
    </>
  );
}
