import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ROIMetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  highlight?: boolean;
}

export function ROIMetricCard({ title, value, subtitle, icon: Icon, trend, highlight }: ROIMetricCardProps) {
  return (
    <Card className={highlight ? "border-primary" : ""}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`flex h-9 w-9 items-center justify-center rounded-md ${highlight ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
          <Icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold" data-testid={`roi-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {value}
        </div>
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        {trend && (
          <div className={`flex items-center gap-1 text-sm mt-2 font-medium ${trend.isPositive ? 'text-chart-2' : 'text-destructive'}`}>
            <span>{trend.isPositive ? '↑' : '↓'}</span>
            <span>{trend.value}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
