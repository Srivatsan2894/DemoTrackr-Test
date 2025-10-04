import { DemoTable as DemoTableComponent } from "../DemoTable";

export default function DemoTableExample() {
  const demos = [
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
    },
  ];

  return (
    <div className="p-8">
      <DemoTableComponent demos={demos} />
    </div>
  );
}
