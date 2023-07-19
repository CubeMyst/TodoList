import { TodoFilterProps } from "../types/types.d";
import {
  FilterButton,
  FilterButtons,
  Filters,
  ItemsLeft,
} from "./Filters.components";

export default function TodoFilters({
  total,
  activeFilter,
  showAll,
  showActive,
  showCompleted,
  handleClearCompletes,
}: TodoFilterProps) {
  return (
    <Filters>
      <ItemsLeft total={total} />

      <FilterButtons>
        <FilterButton
          action={showAll}
          active={activeFilter}
          filter="All"
        />
        <FilterButton
          action={showActive}
          active={activeFilter}
          filter="Active"
        />
        <FilterButton
          action={showCompleted}
          active={activeFilter}
          filter="Completed"
        />
      </FilterButtons>

      <button
        type="button"
        onClick={handleClearCompletes}
        className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out select-none"
      >
        Clear Completed
      </button>
    </Filters>
  );
}
