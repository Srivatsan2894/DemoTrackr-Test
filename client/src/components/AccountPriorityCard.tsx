import { ExternalLink, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AccountPriorityCardProps {
  account: {
    id: string;
    name: string;
    demoCount: number;
    lastDemoDate: Date;
    dealStage: string;
    segment: string;
    priorityScore: number;
    salesforceLink?: string;
  };
  rank: number;
}

export function AccountPriorityCard({ account, rank }: AccountPriorityCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-account-${account.id}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                #{rank}
              </div>
              <h3 className="font-semibold text-lg">{account.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline">{account.segment}</Badge>
              <Badge className="bg-chart-1 text-white">{account.dealStage}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Demos</p>
                <p className="font-semibold">{account.demoCount}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Demo</p>
                <p className="font-semibold">{account.lastDemoDate.toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1 text-chart-2">
              <TrendingUp className="h-4 w-4" />
              <span className="font-semibold">{account.priorityScore}</span>
            </div>
            {account.salesforceLink && (
              <Button
                variant="outline"
                size="sm"
                asChild
                data-testid={`button-view-account-${account.id}`}
              >
                <a href={account.salesforceLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View in SF
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
