import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DemoStageChart } from "@/components/DemoStageChart";
import { SegmentChart } from "@/components/SegmentChart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export default function Insights() {
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

  const dealStageData = [
    { stage: "Prospecting", count: 8 },
    { stage: "Qualification", count: 15 },
    { stage: "Proposal", count: 18 },
    { stage: "Negotiation", count: 12 },
    { stage: "Closed Won", count: 10 },
    { stage: "Closed Lost", count: 5 },
  ];

  const trendData = [
    { month: "Jun", demos: 45 },
    { month: "Jul", demos: 52 },
    { month: "Aug", demos: 61 },
    { month: "Sep", demos: 58 },
    { month: "Oct", demos: 68 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Insights Dashboard</h1>
        <p className="text-muted-foreground">Analyze demo performance and trends</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <DemoStageChart data={demoStageData} />
        <SegmentChart data={segmentData} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Deal Stage Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dealStageData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis type="number" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis 
                  dataKey="stage" 
                  type="category" 
                  width={100}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Bar dataKey="count" fill="hsl(var(--chart-3))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Demo Trend (Last 5 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="demos"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 border rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-2/10 text-chart-2 shrink-0">
                ↑
              </div>
              <div>
                <h4 className="font-semibold">Enterprise Segment Growing</h4>
                <p className="text-sm text-muted-foreground">
                  Enterprise demos increased by 18% this month, showing strong traction with larger accounts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-3/10 text-chart-3 shrink-0">
                ⚠
              </div>
              <div>
                <h4 className="font-semibold">Follow-ups Needed</h4>
                <p className="text-sm text-muted-foreground">
                  8 demos require follow-up action. Focus on these to move deals forward.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-1/10 text-chart-1 shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold">High Conversion Rate</h4>
                <p className="text-sm text-muted-foreground">
                  66% of completed demos are progressing to proposal stage or beyond.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
