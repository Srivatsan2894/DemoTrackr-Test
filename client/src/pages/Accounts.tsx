import { AccountPriorityCard } from "@/components/AccountPriorityCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Accounts() {
  const [searchQuery, setSearchQuery] = useState("");

  const prioritizedAccounts = [
    {
      id: "1",
      name: "Acme Corporation",
      demoCount: 8,
      lastDemoDate: new Date(2024, 9, 1),
      dealStage: "Negotiation",
      segment: "Enterprise",
      priorityScore: 95,
      salesforceLink: "https://example.salesforce.com/account/1",
    },
    {
      id: "2",
      name: "Global Solutions Inc",
      demoCount: 6,
      lastDemoDate: new Date(2024, 9, 3),
      dealStage: "Proposal",
      segment: "Enterprise",
      priorityScore: 88,
      salesforceLink: "https://example.salesforce.com/account/2",
    },
    {
      id: "3",
      name: "TechVentures LLC",
      demoCount: 5,
      lastDemoDate: new Date(2024, 8, 28),
      dealStage: "Qualification",
      segment: "Mid-Market",
      priorityScore: 82,
      salesforceLink: "https://example.salesforce.com/account/3",
    },
    {
      id: "4",
      name: "Innovation Partners",
      demoCount: 4,
      lastDemoDate: new Date(2024, 8, 25),
      dealStage: "Proposal",
      segment: "Mid-Market",
      priorityScore: 76,
    },
    {
      id: "5",
      name: "StartupHub Co",
      demoCount: 3,
      lastDemoDate: new Date(2024, 8, 22),
      dealStage: "Qualification",
      segment: "Startup",
      priorityScore: 68,
      salesforceLink: "https://example.salesforce.com/account/5",
    },
  ];

  const filteredAccounts = prioritizedAccounts.filter((account) =>
    account.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Account Prioritization</h1>
        <p className="text-muted-foreground">
          Accounts ranked by demo activity and deal progression
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search accounts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
          data-testid="input-search-accounts"
        />
      </div>

      <div className="space-y-4">
        {filteredAccounts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No accounts found matching your search.
          </div>
        ) : (
          filteredAccounts.map((account, index) => (
            <AccountPriorityCard
              key={account.id}
              account={account}
              rank={index + 1}
            />
          ))
        )}
      </div>

      <div className="mt-8 p-4 border rounded-md bg-muted/50">
        <h3 className="font-semibold mb-2">Priority Score Calculation</h3>
        <p className="text-sm text-muted-foreground">
          Accounts are scored based on: demo frequency (40%), deal stage progression (35%), 
          recency of last demo (15%), and segment value (10%). Higher scores indicate accounts 
          that require immediate attention and follow-up.
        </p>
      </div>
    </div>
  );
}
