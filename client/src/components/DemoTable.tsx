import { format } from "date-fns";
import { ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Demo {
  id: string;
  date: Date;
  accountName: string;
  demoStage: string;
  dealStage: string;
  segment: string;
  caseLink?: string;
}

interface DemoTableProps {
  demos: Demo[];
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

export function DemoTable({ demos }: DemoTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Account</TableHead>
            <TableHead>Demo Stage</TableHead>
            <TableHead>Deal Stage</TableHead>
            <TableHead>Segment</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demos.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                No demos logged yet. Start by logging your first demo!
              </TableCell>
            </TableRow>
          ) : (
            demos.map((demo) => (
              <TableRow key={demo.id} className="hover-elevate" data-testid={`row-demo-${demo.id}`}>
                <TableCell className="font-medium">{format(demo.date, "MMM dd, yyyy")}</TableCell>
                <TableCell>{demo.accountName}</TableCell>
                <TableCell>
                  <Badge className={stageColors[demo.demoStage] || ""}>
                    {demo.demoStage}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={stageColors[demo.dealStage] || ""}>
                    {demo.dealStage}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{demo.segment}</Badge>
                </TableCell>
                <TableCell>
                  {demo.caseLink && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      data-testid={`button-view-salesforce-${demo.id}`}
                    >
                      <a href={demo.caseLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
