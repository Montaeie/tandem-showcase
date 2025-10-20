import { Contact } from "@/components/contact";
import { DivideX } from "@/components/divide";
import { SignUp } from "@/components/sign-up";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Book a Demo | Tandem AI",
  description:
    "See how Tandem's native AI copilot can transform your user experience. Book a personalized demo based on your goals - onboarding, support reduction, feature adoption, or revenue growth.",
  canonicalUrlRelative: "/contact",
});

export default function SignupPage() {
  return (
    <main>
      <DivideX />
      <Contact />
      <DivideX />
    </main>
  );
}
