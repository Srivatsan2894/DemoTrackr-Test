import { DemoLogDialog as DemoLogDialogComponent } from "../DemoLogDialog";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export default function DemoLogDialogExample() {
  return (
    <TooltipProvider>
      <div className="p-8">
        <DemoLogDialogComponent />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}
