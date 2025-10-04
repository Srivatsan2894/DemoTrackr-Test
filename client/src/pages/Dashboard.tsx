import { Calendar, CheckCircle2, Clock, Target } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { DemoStageChart } from "@/components/DemoStageChart";
import { SegmentChart } from "@/components/SegmentChart";
import { DemoTable } from "@/components/DemoTable";

export default function Dashboard() {
  const demoStageData = [
    { stage: "Scheduled", count: 12 },
    { stage: "Completed", count: 45 },
    { stage: "Follow-up", count: 8 },
    { stage: "Cancelled", count: 3 },
  ];

  const segmentData = [
    { segment: "Enterprise", count: 28 },
    { segment: "Mid-Market", count: 22 },
    { segment: "SMB", count: 12 },
    { segment: "Startup", count: 6 },
  ];

  const recentDemos = [
    {
      id: "1",
      date: new Date(2024, 9, 1),
      accountName: "Acme Corporation",
      demoStage: "Completed",
      dealStage: "Proposal",
      segment: "Enterprise",
      caseLink: "https://example.salesforce.com/case/1",
    },
    {
      id: "2",
      date: new Date(2024, 9, 2),
      accountName: "TechStart Inc",
      demoStage: "Scheduled",
      dealStage: "Qualification",
      segment: "Startup",
      caseLink: "https://example.salesforce.com/case/2",
    },
    {
      id: "3",
      date: new Date(2024, 9, 3),
      accountName: "Global Solutions",
      demoStage: "Follow-up Required",
      dealStage: "Negotiation",
      segment: "Enterprise",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your demo activity and performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Demos"
          value={68}
          description="All time"
          icon={Target}
          trend={{ value: "12% from last month", isPositive: true }}
        />
        <StatCard
          title="Completed"
          value={45}
          description="66% completion rate"
          icon={CheckCircle2}
          trend={{ value: "8% from last month", isPositive: true }}
        />
        <StatCard
          title="Scheduled"
          value={12}
          description="Upcoming demos"
          icon={Clock}
        />
        <StatCard
          title="Active Accounts"
          value={42}
          description="With recent demos"
          icon={Calendar}
          trend={{ value: "5% from last month", isPositive: true }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <DemoStageChart data={demoStageData} />
        <SegmentChart data={segmentData} />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Demos</h2>
        <DemoTable demos={recentDemos} />
      </div>
    </div>
  );
}
