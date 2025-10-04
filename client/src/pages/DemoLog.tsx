import { useState } from "react";
import { DemoLogDialog } from "@/components/DemoLogDialog";
import { DemoTable } from "@/components/DemoTable";
import { FilterBar, FilterState } from "@/components/FilterBar";

export default function DemoLog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({});

  const allDemos = [
    {
      id: "1",
      date: new Date(2024, 9, 1),
      accountName: "Acme Corporation",
      demoStage: "Completed",
      dealStage: "Proposal",
      segment: "Enterprise",
      caseLink: "https://example.salesforce.com/case/1",
    },
    {
      id: "2",
      date: new Date(2024, 9, 2),
      accountName: "TechStart Inc",
      demoStage: "Scheduled",
      dealStage: "Qualification",
      segment: "Startup",
      caseLink: "https://example.salesforce.com/case/2",
    },
    {
      id: "3",
      date: new Date(2024, 9, 3),
      accountName: "Global Solutions",
      demoStage: "Follow-up Required",
      dealStage: "Negotiation",
      segment: "Enterprise",
    },
    {
      id: "4",
      date: new Date(2024, 9, 4),
      accountName: "MidSize Corp",
      demoStage: "Completed",
      dealStage: "Closed Won",
      segment: "Mid-Market",
      caseLink: "https://example.salesforce.com/case/4",
    },
    {
      id: "5",
      date: new Date(2024, 9, 5),
      accountName: "Small Business LLC",
      demoStage: "Cancelled",
      dealStage: "Prospecting",
      segment: "SMB",
    },
  ];

  const filteredDemos = allDemos.filter((demo) => {
    const matchesSearch = demo.accountName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDemoStage = !filters.demoStage || demo.demoStage === filters.demoStage;
    const matchesDealStage = !filters.dealStage || demo.dealStage === filters.dealStage;
    const matchesSegment = !filters.segment || demo.segment === filters.segment;
    return matchesSearch && matchesDemoStage && matchesDealStage && matchesSegment;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Demo Log</h1>
          <p className="text-muted-foreground">Track and manage all your demo sessions</p>
        </div>
        <DemoLogDialog />
      </div>

      <FilterBar onSearch={setSearchQuery} onFilterChange={setFilters} />

      <DemoTable demos={filteredDemos} />
    </div>
  );
}
