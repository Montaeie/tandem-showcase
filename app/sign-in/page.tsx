import { DivideX } from "@/components/divide";
import { SignIn } from "@/components/sign-in";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Sign In | Tandem AI",
  description:
    "Sign in to Tandem AI and manage your AI copilot integrations.",
});

export default function SignupPage() {
  return (
    <main>
      <DivideX />
      <SignIn />
      <DivideX />
    </main>
  );
}
