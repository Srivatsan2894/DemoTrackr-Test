import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DealPipelineChartProps {
  stages: Array<{
    name: string;
    count: number;
    value: number;
    color: string;
  }>;
}

export function DealPipelineChart({ stages }: DealPipelineChartProps) {
  const maxValue = Math.max(...stages.map(s => s.value));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deal Pipeline by Stage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stages.map((stage, index) => {
            const widthPercentage = (stage.value / maxValue) * 100;
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium min-w-[120px]">{stage.name}</span>
                    <Badge variant="secondary">{stage.count} deals</Badge>
                  </div>
                  <span className="text-sm font-semibold text-chart-2">
                    ${(stage.value / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${stage.color} transition-all duration-500`}
                    style={{ width: `${widthPercentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
