import { StatCard as StatCardComponent } from "../StatCard";
import { Target } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <StatCardComponent
        title="Total Demos"
        value={68}
        description="All time"
        icon={Target}
        trend={{ value: "12% from last month", isPositive: true }}
      />
    </div>
  );
}
