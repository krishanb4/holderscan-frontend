import React from "react";
import { ChevronDown } from "lucide-react";
interface FilterButtonProps {
  label: string;
  value: string;
  onClick?: () => void;
}
const FilterButton = ({ label, value, onClick }: FilterButtonProps) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg text-sm text-slate-300 transition-colors"
  >
    <span>{label}</span>
    <span className="text-white">{value}</span>
    <ChevronDown size={16} className="text-slate-400" />
  </button>
);
export const TokenFilters = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <FilterButton label="View:" value="Full" />
      <FilterButton label="List:" value="Default" />
      <FilterButton label="" value=">$10" />
    </div>
  );
};
