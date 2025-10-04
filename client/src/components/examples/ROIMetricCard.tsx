import { ROIMetricCard as ROIMetricCardComponent } from "../ROIMetricCard";
import { DollarSign } from "lucide-react";

export default function ROIMetricCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ROIMetricCardComponent
        title="Pipeline Value"
        value="$2.99M"
        subtitle="Total opportunity value"
        icon={DollarSign}
        trend={{ value: "18% from last month", isPositive: true }}
        highlight={true}
      />
    </div>
  );
}
