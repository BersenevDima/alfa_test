export type FilterType = "all" | "liked";

export interface FilterProps {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}
