import { SegmentChart as SegmentChartComponent } from "../SegmentChart";

export default function SegmentChartExample() {
  const data = [
    { segment: "Enterprise", count: 28 },
    { segment: "Mid-Market", count: 22 },
    { segment: "SMB", count: 12 },
    { segment: "Startup", count: 6 },
  ];

  return (
    <div className="p-8 max-w-2xl">
      <SegmentChartComponent data={data} />
    </div>
  );
}
