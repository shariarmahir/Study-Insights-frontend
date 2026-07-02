import { AdminTopbar } from "@/components/admin/admin-topbar";
import { ComingSoon } from "@/components/admin/coming-soon";

export default function AdminStudentsPage() {
  return (
    <>
      <AdminTopbar title="Students" />
      <div className="flex flex-1 flex-col gap-6 p-4 sm:p-6">
        <ComingSoon title="Student profiles" />
      </div>
    </>
  );
}
