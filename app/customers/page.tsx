"use client";
import { Container } from "@/components/container";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { Badge } from "@/components/badge";
import { SectionHeading } from "@/components/seciton-heading";
import { logos } from "@/constants/logos";
import { testimonials } from "@/constants/testimonials";
import { tandemUseCases } from "@/constants/use-cases-tandem";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export default function CustomersPage() {
  // Group testimonials by company
  const clientStories = logos.map((logo) => {
    const clientTestimonials = testimonials.filter(
      (t) => t.company === logo.title
    );
    const clientUseCases = tandemUseCases.filter(
      (uc) => uc.caseStudy?.company === logo.title
    );

    return {
      ...logo,
      testimonials: clientTestimonials,
      useCases: clientUseCases,
    };
  });

  const [selectedClient, setSelectedClient] = useState(0);
  const currentClient = clientStories[selectedClient];

  return (
    <main>
      <DivideX />

      {/* Hero Section */}
      <Container className="border-divide relative overflow-hidden border-x px-4 py-20 md:px-8">
        <div className="relative flex flex-col items-center">
          <Badge text="Customer Stories" />
          <Heading className="mt-4">
            Trusted by industry leaders
          </Heading>

          <SubHeading as="p" className="mx-auto mt-6 max-w-2xl text-center">
            Companies with millions of users rely on Tandem to deliver
            exceptional in-app guidance and support experiences.
          </SubHeading>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
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

      <DivideX />

      {/* Client Selector */}
      <Container className="border-divide border-x px-4 py-12 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {clientStories.map((client, index) => (
            <button
              key={client.title}
              onClick={() => setSelectedClient(index)}
              className={cn(
                "group relative overflow-hidden border p-8 transition-all duration-300",
                selectedClient === index
                  ? "border-brand bg-brand/10 shadow-lg dark:bg-brand/20"
                  : "border-gray-200 bg-white hover:border-brand/50 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900"
              )}
            >
              <Image
                src={client.src}
                alt={client.title}
                width={120}
                height={40}
                className="h-8 w-auto object-contain grayscale dark:invert dark:filter"
              />
            </button>
          ))}
        </div>
      </Container>

      <DivideX />

      {/* Client Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentClient.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Testimonials Section */}
          {currentClient.testimonials.length > 0 && (
            <>
              <Container className="border-divide border-x px-4 py-20 md:px-8">
                <SectionHeading className="text-center">
                  What {currentClient.title} says
                </SectionHeading>

                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {currentClient.testimonials.map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-brand/50 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
                    >
                      {/* Background gradient on hover */}
                      <div className="animate-move-left-to-right bg-brand/5 absolute inset-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Metric */}
                        <div className="mb-6 flex items-center gap-4">
                          <div className="text-4xl font-bold text-brand">
                            {testimonial.sideText}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-neutral-400">
                            {testimonial.sideSubText}
                          </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="mb-6 leading-relaxed text-gray-900 dark:text-neutral-100">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="h-12 w-12 object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-neutral-100">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-neutral-400">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
              <DivideX />
            </>
          )}

          {/* Use Cases Section */}
          {currentClient.useCases.length > 0 && (
            <>
              <Container className="border-divide border-x px-4 py-20 md:px-8">
                <SectionHeading className="text-center">
                  How {currentClient.title} uses Tandem
                </SectionHeading>

                <div className="mt-12 grid grid-cols-1 gap-8">
                  {currentClient.useCases.map((useCase, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-brand/50 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
                    >
                      {/* Background gradient on hover */}
                      <div className="animate-move-left-to-right bg-brand/5 absolute inset-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"></div>

                      <div className="relative z-10 grid grid-cols-1 gap-8 p-8 lg:grid-cols-2">
                        {/* Left: Video */}
                        <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-neutral-800">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-contain"
                          >
                            <source src={useCase.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>

                        {/* Right: Details */}
                        <div className="flex flex-col justify-center">
                          <h3 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                            {useCase.subtitle}
                          </h3>
                          <p className="mt-4 leading-relaxed text-gray-600 dark:text-neutral-400">
                            {useCase.description}
                          </p>

                          {/* Result */}
                          {useCase.caseStudy && (
                            <div className="mt-6 border border-brand/20 bg-brand/10 p-6 dark:bg-brand/20">
                              <div className="text-2xl font-bold text-brand md:text-3xl">
                                {useCase.caseStudy.result}
                              </div>
                              <p className="mt-2 leading-relaxed text-gray-900 dark:text-white">
                                &quot;{useCase.caseStudy.quote}&quot;
                              </p>
                              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                                — {useCase.caseStudy.person}
                              </p>
                            </div>
                          )}

                          {/* Metrics */}
                          <div className="mt-6">
                            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-neutral-500">
                              Key Metrics
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {useCase.metrics.map((metric) => (
                                <span
                                  key={metric}
                                  className="rounded-md bg-brand/10 px-3 py-1 text-sm font-medium text-brand dark:bg-brand/20"
                                >
                                  {metric}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
              <DivideX />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
