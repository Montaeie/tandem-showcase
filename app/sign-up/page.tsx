import { DivideX } from "@/components/divide";
import { SignUp } from "@/components/sign-up";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Sign Up | Tandem AI",
  description:
    "Sign up for Tandem AI and start guiding your users with native AI copilot today.",
});

export default function SignupPage() {
  return (
    <main>
      <DivideX />
      <SignUp />
      <DivideX />
    </main>
  );
}
