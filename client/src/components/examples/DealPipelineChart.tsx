import { DealPipelineChart as DealPipelineChartComponent } from "../DealPipelineChart";

export default function DealPipelineChartExample() {
  const stages = [
    { name: "Qualification", count: 15, value: 450000, color: "bg-chart-1" },
    { name: "Proposal", count: 18, value: 720000, color: "bg-chart-3" },
    { name: "Negotiation", count: 12, value: 840000, color: "bg-chart-3" },
    { name: "Closed Won", count: 10, value: 980000, color: "bg-chart-2" },
  ];

  return (
    <div className="p-8 max-w-2xl">
      <DealPipelineChartComponent stages={stages} />
    </div>
  );
}
