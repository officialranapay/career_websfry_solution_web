"use client";

import { useCategories } from "@/hooks/use-jobs";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JobFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function JobFilters({ activeCategory, onCategoryChange }: JobFiltersProps) {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide ">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full flex-shrink-0 " />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Desktop filters (pills) */}
      <div className="hidden md:flex flex-wrap gap-3">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-transparent hover:border-border"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile filters (dropdown) */}
      <div className="md:hidden">
        <Select value={activeCategory} onValueChange={(val) => val && onCategoryChange(val)}>
          <SelectTrigger className="w-full h-12 bg-muted/50 border-border/50">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
