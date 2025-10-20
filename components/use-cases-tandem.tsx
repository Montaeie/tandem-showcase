"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { tandemUseCases } from "@/constants/use-cases-tandem";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const UseCasesTandem = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);
  const selectedCase = tandemUseCases[activeUseCase];

  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 md:px-8">
      <div className="relative flex flex-col items-center py-20">
        <Badge text="Use Cases" />
        <SectionHeading className="mt-4">
          Unblock your users at every stage
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-2xl text-center">
          Your users don't think in clicks and menus. They think in outcomes.
          Tandem bridges that gap.
        </SubHeading>

        {/* Tabs */}
        <div className="mt-12 flex w-full flex-wrap justify-center gap-2">
          {tandemUseCases.map((useCase, index) => (
            <button
              key={useCase.title}
              onClick={() => setActiveUseCase(index)}
              className={cn(
                "rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200",
                activeUseCase === index
                  ? "border-brand bg-brand/10 text-brand dark:bg-brand/20"
                  : "border-gray-300 bg-white text-gray-700 hover:border-brand/50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
              )}
            >
              {useCase.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeUseCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 w-full"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Left: Video */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 lg:col-span-2 dark:bg-neutral-800">
                <video
                  key={selectedCase.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-contain"
                >
                  <source src={selectedCase.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Right: Details */}
              <div className="flex flex-col justify-center lg:col-span-1">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedCase.subtitle}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-neutral-400">
                  {selectedCase.description}
                </p>

                {/* Teams */}
                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-neutral-500">
                    Teams
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedCase.teams.map((team) => (
                      <span
                        key={team}
                        className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-neutral-700 dark:text-neutral-300"
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-neutral-500">
                    Key Metrics
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedCase.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-md bg-brand/10 px-3 py-1 text-sm font-medium text-brand dark:bg-brand/20"
                        style={{ wordBreak: 'break-word' }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Container>
  );
};
