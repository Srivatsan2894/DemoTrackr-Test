import { WinRateChart as WinRateChartComponent } from "../WinRateChart";

export default function WinRateChartExample() {
  const data = [
    { name: "Closed Won", value: 10, color: "hsl(var(--chart-2))" },
    { name: "Closed Lost", value: 5, color: "hsl(var(--destructive))" },
    { name: "In Progress", value: 45, color: "hsl(var(--chart-3))" },
  ];

  return (
    <div className="p-8 max-w-2xl">
      <WinRateChartComponent data={data} winRate={67} />
    </div>
  );
}
