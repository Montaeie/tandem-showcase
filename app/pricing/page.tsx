import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { FAQs } from "@/components/faqs";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "@/components/pricing-table";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Pricing - Tandem AI",
  description:
    "Tandem AI pricing plans. Choose the right plan for your team to deliver native AI copilot experiences to your users.",
});

export default function PricingPage() {
  return (
    <main>
      <DivideX />
      <Pricing />
      <DivideX />
      <PricingTable />
      {/* <DivideX /> */}
      <FAQs />
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
