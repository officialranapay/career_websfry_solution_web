import { HeroSection } from "@/features/landing/hero-section";
import { CompanyIntro } from "@/features/landing/company-intro";
import { BenefitsSection } from "@/features/landing/benefits-section";
import { CategoriesSection } from "@/features/landing/categories-section";
import { JobsPreview } from "@/features/landing/jobs-preview";
import { PageTransition } from "@/components/shared/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <CompanyIntro />
      <BenefitsSection />
      <CategoriesSection />
      <JobsPreview />
    </PageTransition>
  );
}
