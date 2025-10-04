import { DemoStageChart as DemoStageChartComponent } from "../DemoStageChart";

export default function DemoStageChartExample() {
  const data = [
    { stage: "Scheduled", count: 12 },
    { stage: "Completed", count: 45 },
    { stage: "Follow-up", count: 8 },
    { stage: "Cancelled", count: 3 },
  ];

  return (
    <div className="p-8 max-w-2xl">
      <DemoStageChartComponent data={data} />
    </div>
  );
}
