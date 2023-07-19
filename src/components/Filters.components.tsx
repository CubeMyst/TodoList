import type {
  ChildrenProp,
  FilterButtonProps,
  ItemsLeftProp,
} from "../types/types.d";

function Filters({ children }: ChildrenProp) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
      {children}
    </div>
  );
}

function ItemsLeft({ total }: ItemsLeftProp) {
  return (
    <p className="text-gray-200 text-sm">{total} items left</p>
  );
}

function FilterButtons({ children }: ChildrenProp) {
  return (
    <div className="flex items-center space-x-2">{children}</div>
  );
}

function FilterButton({ action, active, filter }: FilterButtonProps) {
  const isActiveIncluded = active.toLowerCase().includes(filter.toLowerCase());

  return (
    <button
      type="button"
      className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out ${
        isActiveIncluded ? " text-blue-500 " : "text-gray-400 "
      }`}
      onClick={action}
    >
      {filter}
    </button>
  );
}

export { FilterButton, FilterButtons, Filters, ItemsLeft };
