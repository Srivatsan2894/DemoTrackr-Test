import { useState } from "react";
import { Calendar, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface FilterBarProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filters: FilterState) => void;
}

export interface FilterState {
  demoStage?: string;
  dealStage?: string;
  segment?: string;
  dateRange?: string;
}

const demoStages = ["All", "Scheduled", "Completed", "Follow-up Required", "Cancelled"];
const dealStages = ["All", "Prospecting", "Qualification", "Proposal", "Negotiation", "Closed Won", "Closed Lost"];
const segments = ["All", "Enterprise", "Mid-Market", "SMB", "Startup"];
const dateRanges = ["All Time", "Today", "This Week", "This Month", "Last 30 Days"];

export function FilterBar({ onSearch, onFilterChange }: FilterBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({});
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value === "All" || value === "All Time" ? undefined : value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search demos by account name..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9"
            data-testid="input-search"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          data-testid="button-toggle-filters"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-md bg-card">
          <div>
            <label className="text-sm font-medium mb-2 block">Demo Stage</label>
            <Select onValueChange={(value) => handleFilterChange("demoStage", value)}>
              <SelectTrigger data-testid="select-filter-demo-stage">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                {demoStages.map((stage) => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Deal Stage</label>
            <Select onValueChange={(value) => handleFilterChange("dealStage", value)}>
              <SelectTrigger data-testid="select-filter-deal-stage">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                {dealStages.map((stage) => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Segment</label>
            <Select onValueChange={(value) => handleFilterChange("segment", value)}>
              <SelectTrigger data-testid="select-filter-segment">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                {segments.map((segment) => (
                  <SelectItem key={segment} value={segment}>
                    {segment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Date Range</label>
            <Select onValueChange={(value) => handleFilterChange("dateRange", value)}>
              <SelectTrigger data-testid="select-filter-date-range">
                <SelectValue placeholder="All Time" />
              </SelectTrigger>
              <SelectContent>
                {dateRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
}
