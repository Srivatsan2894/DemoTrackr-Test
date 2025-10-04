import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const demoFormSchema = z.object({
  demoDate: z.date(),
  accountName: z.string().min(1, "Account name is required"),
  demoStage: z.string().min(1, "Demo stage is required"),
  dealStage: z.string().min(1, "Deal stage is required"),
  segment: z.string().min(1, "Segment is required"),
  caseLink: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  notes: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

const demoStages = ["Scheduled", "Completed", "Follow-up Required", "Cancelled"];
const dealStages = ["Prospecting", "Qualification", "Proposal", "Negotiation", "Closed Won", "Closed Lost"];
const segments = ["Enterprise", "Mid-Market", "SMB", "Startup"];

export function DemoLogDialog() {
  const [open, setOpen] = useState(false);
  const [salesforceStatus, setSalesforceStatus] = useState<"idle" | "syncing" | "synced" | "error">("idle");
  const { toast } = useToast();

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      demoDate: new Date(),
      accountName: "",
      demoStage: "",
      dealStage: "",
      segment: "",
      caseLink: "",
      notes: "",
    },
  });

  const onSubmit = (data: DemoFormValues) => {
    console.log("Demo logged:", data);
    
    if (data.caseLink) {
      setSalesforceStatus("syncing");
      setTimeout(() => {
        setSalesforceStatus("synced");
        toast({
          title: "Demo logged successfully",
          description: "Account details synced from Salesforce.",
        });
      }, 1500);
    } else {
      toast({
        title: "Demo logged successfully",
        description: "Your demo has been recorded.",
      });
    }

    setTimeout(() => {
      form.reset();
      setSalesforceStatus("idle");
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button data-testid="button-log-demo">
          <Plus className="h-4 w-4 mr-2" />
          Log Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Log New Demo</DialogTitle>
          <DialogDescription>
            Record a demo session and sync account details from Salesforce.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="demoDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Demo Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className="justify-start text-left font-normal"
                            data-testid="button-demo-date"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : "Pick a date"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accountName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Corp" {...field} data-testid="input-account-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="demoStage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Demo Stage</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-demo-stage">
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {demoStages.map((stage) => (
                          <SelectItem key={stage} value={stage}>
                            {stage}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dealStage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deal Stage</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-deal-stage">
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {dealStages.map((stage) => (
                          <SelectItem key={stage} value={stage}>
                            {stage}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="segment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Segment</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-segment">
                        <SelectValue placeholder="Select segment" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {segments.map((segment) => (
                        <SelectItem key={segment} value={segment}>
                          {segment}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="caseLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Salesforce Case Link
                    {salesforceStatus === "syncing" && (
                      <Badge variant="secondary" className="ml-2">Syncing...</Badge>
                    )}
                    {salesforceStatus === "synced" && (
                      <Badge className="ml-2 bg-chart-2 text-white">Synced</Badge>
                    )}
                    {salesforceStatus === "error" && (
                      <Badge variant="destructive" className="ml-2">Error</Badge>
                    )}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://example.salesforce.com/case/..." 
                      {...field} 
                      data-testid="input-case-link"
                      className="font-mono text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add any additional notes about this demo..."
                      className="resize-none"
                      rows={4}
                      {...field}
                      data-testid="textarea-notes"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                data-testid="button-cancel"
              >
                Cancel
              </Button>
              <Button type="submit" data-testid="button-submit">
                Log Demo
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
