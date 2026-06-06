"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useJobs } from "@/hooks/use-jobs";
import { JobCard } from "./job-card";
import { JobFilters } from "./job-filters";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, SearchX } from "lucide-react";

export function JobList() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("All");

  const { data, isLoading } = useJobs(page, category);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setPage(1); // Reset to page 1 on filter change
  };

  return (
    <div className="space-y-12">
      <JobFilters activeCategory={category} onCategoryChange={handleCategoryChange} />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-72 rounded-2xl cursor-pointer" />
          ))}
        </div>
      ) : data?.data.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-border/50 rounded-3xl bg-muted/30"
        >
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
            <SearchX className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-2">No open roles found</h3>
          <p className="text-muted-foreground max-w-md">
            We don't have any open roles in {category !== "All" ? category : "any department"} right now. 
            Check back later or explore other departments!
          </p>
        </motion.div>
      ) : (
        <>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
          >
            <AnimatePresence mode="popLayout">
              {data?.data.map((job, index) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <JobCard job={job} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          {data && data.totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-8 border-t border-border/50">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous Page</span>
              </Button>

              <div className="flex items-center gap-2 px-4">
                {Array.from({ length: data.totalPages }).map((_, i) => (
                  <Button
                    key={i + 1}
                    variant={page === i + 1 ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setPage(i + 1)}
                    className={`rounded-full w-8 h-8 ${page !== i + 1 && "text-muted-foreground"}`}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
                disabled={page === data.totalPages}
                className="rounded-full cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next Page</span>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
