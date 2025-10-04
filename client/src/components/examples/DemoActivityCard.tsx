import { DemoActivityCard as DemoActivityCardComponent } from "../DemoActivityCard";

export default function DemoActivityCardExample() {
  const demo = {
    id: "1",
    date: new Date(2024, 9, 1),
    accountName: "Acme Corporation",
    demoStage: "Completed",
    dealStage: "Negotiation",
    segment: "Enterprise",
    consultantName: "Sarah Johnson",
    dealValue: 180000,
    caseLink: "https://example.salesforce.com/case/1",
    accountLink: "https://example.salesforce.com/account/1",
  };

  return (
    <div className="p-8 max-w-2xl">
      <DemoActivityCardComponent demo={demo} />
    </div>
  );
}
