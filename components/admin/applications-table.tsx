import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Application } from "@/lib/admin-data";

const statusStyles: Record<Application["status"], string> = {
  New: "bg-primary/10 text-primary",
  "In Review": "bg-amber-100 text-amber-700",
  "Visa Stage": "bg-accent/10 text-accent",
  Approved: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-red-100 text-red-700",
};

export function ApplicationsTable({
  applications,
}: {
  applications: Application[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Level</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Submitted</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={application.id}>
            <TableCell>
              <div className="font-medium text-primary">
                {application.studentName}
              </div>
              <div className="text-xs text-primary/60">
                {application.email}
              </div>
            </TableCell>
            <TableCell>{application.destination}</TableCell>
            <TableCell>{application.level}</TableCell>
            <TableCell>
              <Badge
                className={cn(
                  "border-transparent font-medium",
                  statusStyles[application.status]
                )}
              >
                {application.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right text-primary/60">
              {application.submittedAt}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
