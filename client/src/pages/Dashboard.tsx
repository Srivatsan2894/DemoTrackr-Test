import { DollarSign, TrendingUp, Users, Target, Award, Zap } from "lucide-react";
import { ROIMetricCard } from "@/components/ROIMetricCard";
import { DealPipelineChart } from "@/components/DealPipelineChart";
import { WinRateChart } from "@/components/WinRateChart";
import { DemoActivityCard } from "@/components/DemoActivityCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const pipelineStages = [
    { name: "Qualification", count: 15, value: 450000, color: "bg-chart-1" },
    { name: "Proposal", count: 18, value: 720000, color: "bg-chart-3" },
    { name: "Negotiation", count: 12, value: 840000, color: "bg-chart-3" },
    { name: "Closed Won", count: 10, value: 980000, color: "bg-chart-2" },
  ];

  const winRateData = [
    { name: "Closed Won", value: 10, color: "hsl(var(--chart-2))" },
    { name: "Closed Lost", value: 5, color: "hsl(var(--destructive))" },
    { name: "In Progress", value: 45, color: "hsl(var(--chart-3))" },
  ];

  const recentDemos = [
    {
      id: "1",
      date: new Date(2024, 9, 1),
      accountName: "Acme Corporation",
      demoStage: "Completed",
      dealStage: "Negotiation",
      segment: "Enterprise",
      consultantName: "Sarah Johnson",
      dealValue: 180000,
      caseLink: "https://example.salesforce.com/case/1",
      accountLink: "https://example.salesforce.com/account/1",
    },
    {
      id: "2",
      date: new Date(2024, 9, 2),
      accountName: "Global Solutions Inc",
      demoStage: "Completed",
      dealStage: "Proposal",
      segment: "Enterprise",
      consultantName: "Michael Chen",
      dealValue: 250000,
      caseLink: "https://example.salesforce.com/case/2",
      accountLink: "https://example.salesforce.com/account/2",
    },
    {
      id: "3",
      date: new Date(2024, 9, 3),
      accountName: "TechVentures LLC",
      demoStage: "Follow-up Required",
      dealStage: "Qualification",
      segment: "Mid-Market",
      consultantName: "Emily Rodriguez",
      dealValue: 95000,
      caseLink: "https://example.salesforce.com/case/3",
      accountLink: "https://example.salesforce.com/account/3",
    },
    {
      id: "4",
      date: new Date(2024, 9, 4),
      accountName: "Innovation Partners",
      demoStage: "Scheduled",
      dealStage: "Prospecting",
      segment: "Mid-Market",
      consultantName: "David Kim",
      dealValue: 120000,
      accountLink: "https://example.salesforce.com/account/4",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">ROI Dashboard</h1>
        <p className="text-muted-foreground mt-1">Real-time insights into demo performance and revenue impact</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ROIMetricCard
          title="Pipeline Value"
          value="$2.99M"
          subtitle="Total opportunity value"
          icon={DollarSign}
          trend={{ value: "18% from last month", isPositive: true }}
          highlight={true}
        />
        <ROIMetricCard
          title="Avg Deal Size"
          value="$145K"
          subtitle="Per opportunity"
          icon={TrendingUp}
          trend={{ value: "12% from last month", isPositive: true }}
        />
        <ROIMetricCard
          title="Active Accounts"
          value="42"
          subtitle="With recent demos"
          icon={Users}
          trend={{ value: "5% from last month", isPositive: true }}
        />
        <ROIMetricCard
          title="Win Rate"
          value="67%"
          subtitle="Demo to close ratio"
          icon={Award}
          trend={{ value: "4% from last month", isPositive: true }}
        />
        <ROIMetricCard
          title="Velocity"
          value="23 days"
          subtitle="Avg. demo to close"
          icon={Zap}
          trend={{ value: "3 days faster", isPositive: true }}
        />
        <ROIMetricCard
          title="Total Demos"
          value="68"
          subtitle="This month"
          icon={Target}
          trend={{ value: "12% from last month", isPositive: true }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <DealPipelineChart stages={pipelineStages} />
        <WinRateChart data={winRateData} winRate={67} />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">Recent Demo Activity</h2>
            <p className="text-sm text-muted-foreground">Latest demos from your team</p>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {recentDemos.map((demo) => (
            <DemoActivityCard key={demo.id} demo={demo} />
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Salesforce Integration Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-md bg-muted/50">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-chart-2 animate-pulse" />
              <div>
                <p className="font-medium">Connected to Salesforce</p>
                <p className="text-sm text-muted-foreground">
                  Last synced: Just now • All deal stages and values are up to date
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
