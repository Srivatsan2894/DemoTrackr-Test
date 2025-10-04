import { format } from "date-fns";
import { ExternalLink, Calendar, TrendingUp, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DemoActivityCardProps {
  demo: {
    id: string;
    date: Date;
    accountName: string;
    demoStage: string;
    dealStage: string;
    segment: string;
    consultantName: string;
    dealValue?: number;
    caseLink?: string;
    accountLink?: string;
  };
}

const stageColors: Record<string, string> = {
  "Scheduled": "bg-chart-1 text-white",
  "Completed": "bg-chart-2 text-white",
  "Follow-up Required": "bg-chart-3 text-white",
  "Cancelled": "bg-muted text-muted-foreground",
  "Prospecting": "bg-muted text-muted-foreground",
  "Qualification": "bg-chart-1 text-white",
  "Proposal": "bg-chart-3 text-white",
  "Negotiation": "bg-chart-3 text-white",
  "Closed Won": "bg-chart-2 text-white",
  "Closed Lost": "bg-destructive text-white",
};

export function DemoActivityCard({ demo }: DemoActivityCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-demo-${demo.id}`}>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-primary shrink-0" />
                <h3 className="font-semibold text-lg truncate">{demo.accountName}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4" />
                <span>{format(demo.date, "MMM dd, yyyy")}</span>
                <span className="text-muted-foreground/50">•</span>
                <span>{demo.consultantName}</span>
              </div>
            </div>
            {demo.dealValue && (
              <div className="text-right shrink-0">
                <div className="flex items-center gap-1 text-chart-2 font-semibold">
                  <TrendingUp className="h-4 w-4" />
                  <span>${(demo.dealValue / 1000).toFixed(0)}K</span>
                </div>
                <p className="text-xs text-muted-foreground">Deal Value</p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className={stageColors[demo.demoStage] || ""}>
              {demo.demoStage}
            </Badge>
            <Badge className={stageColors[demo.dealStage] || ""}>
              {demo.dealStage}
            </Badge>
            <Badge variant="outline">{demo.segment}</Badge>
          </div>

          <div className="flex gap-2 pt-2">
            {demo.accountLink && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1"
                data-testid={`button-view-account-${demo.id}`}
              >
                <a href={demo.accountLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Account
                </a>
              </Button>
            )}
            {demo.caseLink && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1"
                data-testid={`button-view-case-${demo.id}`}
              >
                <a href={demo.caseLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Case
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
