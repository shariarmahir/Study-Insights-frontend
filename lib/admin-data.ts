export type Application = {
  id: string;
  studentName: string;
  email: string;
  destination: string;
  level: string;
  status: "New" | "In Review" | "Visa Stage" | "Approved" | "Rejected";
  submittedAt: string;
};

export const applications: Application[] = [
  {
    id: "APP-1042",
    studentName: "Tanvir Rahman",
    email: "tanvir.r@example.com",
    destination: "Germany",
    level: "Master's",
    status: "Visa Stage",
    submittedAt: "2026-06-18",
  },
  {
    id: "APP-1041",
    studentName: "Nusrat Jahan",
    email: "nusrat.j@example.com",
    destination: "Canada",
    level: "Bachelor's",
    status: "In Review",
    submittedAt: "2026-06-20",
  },
  {
    id: "APP-1040",
    studentName: "Rafiul Hasan",
    email: "rafiul.h@example.com",
    destination: "Netherlands",
    level: "Master's",
    status: "Approved",
    submittedAt: "2026-06-15",
  },
  {
    id: "APP-1039",
    studentName: "Farhana Akter",
    email: "farhana.a@example.com",
    destination: "United Kingdom",
    level: "Master's",
    status: "New",
    submittedAt: "2026-06-27",
  },
  {
    id: "APP-1038",
    studentName: "Imran Kabir",
    email: "imran.k@example.com",
    destination: "United Kingdom",
    level: "PhD",
    status: "In Review",
    submittedAt: "2026-06-24",
  },
  {
    id: "APP-1037",
    studentName: "Sadia Mostafa",
    email: "sadia.m@example.com",
    destination: "Australia",
    level: "Bachelor's",
    status: "Rejected",
    submittedAt: "2026-06-10",
  },
];

export const monthlyApplications = [
  { month: "Jan", applications: 18 },
  { month: "Feb", applications: 24 },
  { month: "Mar", applications: 21 },
  { month: "Apr", applications: 30 },
  { month: "May", applications: 27 },
  { month: "Jun", applications: 34 },
];

export const destinationBreakdown = [
  { destination: "Germany", students: 42 },
  { destination: "UK", students: 35 },
  { destination: "Canada", students: 28 },
  { destination: "Netherlands", students: 19 },
  { destination: "Australia", students: 14 },
];

export const dashboardStats = {
  totalApplications: applications.length,
  newThisWeek: applications.filter((a) => a.status === "New").length,
  inVisaStage: applications.filter((a) => a.status === "Visa Stage").length,
  approved: applications.filter((a) => a.status === "Approved").length,
};
