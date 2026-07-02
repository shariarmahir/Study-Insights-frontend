"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { monthlyApplications } from "@/lib/admin-data";

const chartConfig = {
  applications: {
    label: "Applications",
    color: "var(--accent)",
  },
} satisfies ChartConfig;

export function ApplicationsChart() {
  return (
    <ChartContainer config={chartConfig} className="h-64 w-full">
      <BarChart data={[...monthlyApplications]}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="applications"
          fill="var(--color-applications)"
          radius={6}
        />
      </BarChart>
    </ChartContainer>
  );
}
