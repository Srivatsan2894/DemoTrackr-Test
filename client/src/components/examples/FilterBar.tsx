import { FilterBar as FilterBarComponent } from "../FilterBar";

export default function FilterBarExample() {
  return (
    <div className="p-8">
      <FilterBarComponent
        onSearch={(query) => console.log("Search:", query)}
        onFilterChange={(filters) => console.log("Filters:", filters)}
      />
    </div>
  );
}
