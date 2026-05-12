"use client";

import { motion } from "framer-motion";
import { useApplications } from "@/hooks/use-applications";
import { Skeleton } from "@/components/ui/skeleton";
import { StatusBadge } from "@/components/shared/status-badge";
import { MapPin, Calendar, Building, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AppliedJobsList() {
  const { data: applications, isLoading } = useApplications();
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-32 w-full rounded-2xl" />
        ))}
      </div>
    );
  }

  if (!applications || applications.length === 0) {
    return (
      <div className="text-center py-20 bg-muted/20 border border-dashed border-border/50 rounded-3xl">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Briefcase className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-heading font-semibold mb-2">No applications yet</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          You haven't applied to any roles yet. Explore our open positions and find your next opportunity!
        </p>
      </div>
    );
  }

  const getStatusSummary = () => {
    const total = applications.length;
    const underReview = applications.filter(a => a.status === "Seen").length;
    const submitted = applications.filter(a => a.status === "Submitted").length;
    
    return { total, underReview, submitted };
  };
  const summary = getStatusSummary();

  return (
    <div className="space-y-8">
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-card border-border/50 shadow-none">
          <p className="text-sm text-muted-foreground font-medium mb-1">Total Applied</p>
          <p className="text-3xl font-heading font-bold">{summary.total}</p>
        </Card>
        <Card className="p-6 bg-card border-border/50 shadow-none">
          <p className="text-sm text-muted-foreground font-medium mb-1">Under Review</p>
          <p className="text-3xl font-heading font-bold text-amber-500">{summary.underReview}</p>
        </Card>
        <Card className="p-6 bg-card border-border/50 shadow-none">
          <p className="text-sm text-muted-foreground font-medium mb-1">Awaiting Review</p>
          <p className="text-3xl font-heading font-bold text-blue-500">{summary.submitted}</p>
        </Card>
      </div>

      {/* Applications list */}
      <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-border/50 bg-muted/20 hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
          <div className="col-span-5">Role</div>
          <div className="col-span-3">Date Applied</div>
          <div className="col-span-4">Status</div>
        </div>
        
        <div className="divide-y divide-border/50">
          {applications.map((app, index) => ( 
            <motion.div 
              key={app?.id || index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 hover:bg-muted/10 transition-colors flex flex-col md:grid md:grid-cols-12 gap-4 md:items-center"
            >
              <div className="col-span-5">
                <h4 className="font-semibold text-lg mb-1">{app?.title}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Building className="w-3.5 h-3.5" />Websfry Solutions </span>
                </div>
              </div>
              
              <div className="col-span-3 flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                <Calendar className="w-4 h-4 md:hidden" />
                {new Date(app?.createdAt).toLocaleDateString(undefined, { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              
              <div className="col-span-4 mt-4 md:mt-0">
                <StatusBadge status={app.status} />
                <p className="text-xs text-muted-foreground mt-2">
                  Application ID: {app.id || "N/A"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
