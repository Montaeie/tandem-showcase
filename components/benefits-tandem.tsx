"use client";
import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import {
  IntegrationsLogo,
  CodeIcon,
  MouseBoxIcon,
  BrainIcon,
} from "@/icons/bento-icons";
import { TandemIcon } from "./logo";

export const BenefitsTandem = () => {
  const benefits = [
    {
      title: "Native integration, right inside your product",
      description:
        "Tandem embeds directly into your UI, no clunky overlays or bolt-ons. Your users stay in the flow of your app while Tandem guides them through complex setups, feature adoption, and workflows.",
      icon: <TandemIcon className="size-8" />,
    },
    {
      title: "No engineering needed",
      description:
        "Your non-technical teams can design, update, and launch user flows without touching code. Tandem can operate your product's UI and even take action on behalf of the user, so your CS and Product teams scale guidance effortlessly.",
      icon: <TandemIcon className="size-8" />,
    },
    {
      title: "Precision control for every use case",
      description:
        "Decide exactly where and when to deploy Tandem in your product. Guide specific user segments, target key features, or trigger contextual help at the right moment—without disrupting the rest of the experience.",
      icon: <TandemIcon className="size-8" />,
    },
    {
      title: "Powered by your knowledge & playbooks",
      description:
        "Tandem ingests your documentation, FAQs, and CSM strategies—turning them into automated, step-by-step guidance and contextual answers inside your product. Your best practices scale to every user, instantly.",
      icon: <TandemIcon className="size-8" />,
    },
  ];

  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 py-20 md:px-8">
      <div className="relative flex flex-col items-center">
        <Badge text="Your processes and playbooks, amplified" />
        <SectionHeading className="mt-4">
          Built for product teams who move fast
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-2xl text-center">
          Tandem is the only AI copilot that lives natively in your product,
          empowering your teams to deliver personalized guidance at scale.
        </SubHeading>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-brand/50 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
          >
            {/* Background gradient on hover */}
            <div className="animate-move-left-to-right bg-brand/5 absolute inset-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand/10 dark:bg-brand/20">
                {benefit.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-neutral-400">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
