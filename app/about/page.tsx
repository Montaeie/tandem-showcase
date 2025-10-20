import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { InformationBlock } from "@/components/information-block";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";
import { careers } from "@/constants/careers";
import { founders } from "@/constants/founders";
import { LinkedInIcon } from "@/icons/general";

import { getSEOTags } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "About Us - Tandem AI",
  description:
    "We're building the future of user guidance. Founded by product leaders and AI researchers, Tandem AI was born to help users succeed in complex products through native AI copilot experiences that guide, explain, and complete tasks.",
});

export default function AboutPage() {
  return (
    <main>
      <DivideX />
      <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:px-8 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <Badge text="About Us" />
            <Heading className="mt-4 text-left">
              Transforming How Users Experience Complex Products
            </Heading>
            <SubHeading className="mt-6 mr-auto text-left">
              Founded by product leaders and AI researchers, Tandem AI was born from a
              simple insight: users don't think in clicks and menus—they think in outcomes.
              We set out to revolutionize how products guide users by creating an AI copilot that
              lives natively in your app and helps users accomplish their goals effortlessly.
              <br /> <br />
              Today, Tandem AI powers user success for innovative companies like
              Qonto, Aircall, and Sellsy, serving millions of users worldwide. Our native AI copilot
              accelerates onboarding, drives feature adoption, deflects support tickets, and scales
              personalized guidance to every user—24/7.
            </SubHeading>
          </div>
          <div className="border-divide rounded-3xl border p-2">
            <Image
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              width={1000}
              height={1000}
              className="h-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="text-center">
            <div className="text-5xl font-bold text-brand">10M+</div>
            <div className="mt-2 text-gray-600 dark:text-neutral-400">
              Users guided monthly
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand">70%</div>
            <div className="mt-2 text-gray-600 dark:text-neutral-400">
              Average ticket deflection
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand">3x</div>
            <div className="mt-2 text-gray-600 dark:text-neutral-400">
              Faster user onboarding
            </div>
          </div>
        </div>
      </Container>
      <Testimonials />
      <Container className="border-divide border-x border-t p-4 py-20 md:px-8 md:py-40">
        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <Badge text="Journey and Values" />
            <SectionHeading className="mt-4 text-left">
              Empowering Product Teams to Scale User Success
            </SectionHeading>
            <SubHeading className="mt-6 mr-auto text-left">
              We believe every user deserves personalized guidance, regardless of company size
              or resources. Tandem makes it possible for product teams to deliver enterprise-grade
              support experiences without expanding headcount.
            </SubHeading>
            <div className="divide-divide mt-8 grid grid-cols-3 gap-6">
              <MetricBlock value="5+" label="Industry Leaders" />
              <MetricBlock value="20+" label="Countries" />
              <MetricBlock value="10M+" label="Users Guided" />
            </div>
          </div>
          <InformationBlock />
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x py-16">
        <Badge text="Our Team" />
        <SectionHeading className="mt-4">
          Team of Industry Leaders
        </SectionHeading>
        <SubHeading className="mx-auto mt-6 max-w-lg px-4">
          Led by experienced product leaders and AI researchers committed to transforming
          how users interact with complex software.
        </SubHeading>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {founders.map((founder) => (
            <div
              className="group relative h-60 overflow-hidden rounded-2xl md:h-100"
              key={founder.name + founder.title}
            >
              <Image
                src={founder.src}
                alt={founder.name}
                width={500}
                height={500}
                className="h-full w-full object-cover object-top"
              />
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 hidden h-[30%] w-full transition-all duration-200 group-hover:block"
                blurIntensity={2}
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-black/80 px-4 py-2">
                <div>
                  <h3 className="text-sm font-medium text-white">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-neutral-300">{founder.title}</p>
                </div>
                <a
                  href={founder.url}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <LinkedInIcon className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x border-b pb-20">
        <div className="divide-divide border-divide grid grid-cols-1 border-b lg:grid-cols-2 lg:divide-x">
          <div className="flex flex-col items-start justify-start px-4 py-10 md:px-8 md:py-20">
            <Badge text="Careers" />
            <SectionHeading className="mt-4 text-left">
              Build the Future of <br />
              User Guidance with AI
            </SectionHeading>
            <SubHeading className="mt-6 mr-auto max-w-md text-left">
              Join a team of exceptional builders creating native AI copilot experiences
              that transform how millions of users interact with complex products.
            </SubHeading>
            <div className="mt-4 flex items-center gap-2">
              <p className="text-charcoal-700 text-base font-medium dark:text-neutral-100">
                Join the team
              </p>
              <div className="flex items-center">
                {founders.slice(0, 3).map((founder) => (
                  <Image
                    key={founder.name + founder.title}
                    src={founder.src}
                    alt={founder.name}
                    width={500}
                    height={500}
                    className="-mr-3 size-10 rounded-full border border-white object-cover"
                  />
                ))}
                <div className="flex size-10 items-center justify-center rounded-full bg-gray-300">
                  <p className="text-charcoal-700 text-sm font-medium">
                    {founders.length - 3}+
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <h2 className="font-mono text-sm tracking-tight text-neutral-500 uppercase dark:text-neutral-400">
                Backed by
              </h2>
              <Image
                src="/logos/Logo_Hexa.svg"
                alt="Hexa"
                width={120}
                height={40}
                className="h-6 w-auto object-contain grayscale dark:invert dark:filter"
              />
            </div>
          </div>
          <div className="divide-divide border-divide divide-y border-t lg:border-t-0">
            {careers.slice(0, 4).map((career, index) => (
              <Link
                href={career.href}
                key={career.id}
                className="block cursor-pointer px-4 py-4 hover:bg-gray-100 md:px-8 dark:hover:bg-neutral-800"
              >
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-brand font-medium">{career.title}</h3>
                  <div className="hidden size-1 rounded-full bg-gray-400 sm:block dark:bg-neutral-600"></div>
                  <p className="text-sm text-gray-600 dark:text-neutral-200">
                    {career.location}
                  </p>
                  <div className="hidden size-1 rounded-full bg-gray-400 sm:block dark:bg-neutral-600"></div>
                  <span className="text-xs font-medium text-gray-600 dark:text-neutral-400">
                    {Math.floor(
                      (new Date().getTime() -
                        new Date(career.createdAt).getTime()) /
                        (1000 * 60 * 60 * 24),
                    )}{" "}
                    days ago
                  </span>
                </div>
                <p className="mt-2 font-medium text-neutral-500 dark:text-neutral-200">
                  {career.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <CTA />
      <DivideX />
    </main>
  );
}

const MetricBlock = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <h3 className="text-charcoal-700 text-3xl font-medium dark:text-neutral-100">
        {value}
      </h3>
      <p className="text-sm text-gray-600 dark:text-neutral-400">{label}</p>
    </div>
  );
};
