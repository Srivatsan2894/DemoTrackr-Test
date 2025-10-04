import { AccountPriorityCard as AccountPriorityCardComponent } from "../AccountPriorityCard";

export default function AccountPriorityCardExample() {
  const account = {
    id: "1",
    name: "Acme Corporation",
    demoCount: 8,
    lastDemoDate: new Date(2024, 9, 1),
    dealStage: "Negotiation",
    segment: "Enterprise",
    priorityScore: 95,
    salesforceLink: "https://example.salesforce.com/account/1",
  };

  return (
    <div className="p-8 max-w-2xl">
      <AccountPriorityCardComponent account={account} rank={1} />
    </div>
  );
}
