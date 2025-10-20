"use client";
import React, { useState } from "react";
import { Container } from "./container";
import Image from "next/image";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./button";
import { AuthIllustration } from "./auth-illustration";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [selectedCompanySize, setSelectedCompanySize] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted", { selectedGoal, selectedCompanySize });
  };

  const goals = [
    "Convert more users",
    "Onboard & activate users faster",
    "Reduce support tickets",
    "Drive feature adoption",
    "Expand revenues (upsell, cross-sell...)",
    "Other",
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees",
  ];

  return (
    <Container className="min-h-[calc(100vh-8rem)] py-10 md:py-20">
      <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 md:px-8 lg:gap-40">
        <div>
          <Image
            src="/logos/logo-tandem.png"
            alt="Tandem AI"
            width={80}
            height={24}
            className="h-5 w-auto dark:invert dark:filter"
          />
          <Heading className="mt-4 text-left lg:text-4xl">
            Transform Your User Experience
          </Heading>
          <SubHeading as="p" className="mt-4 max-w-xl text-left">
            See how Tandem's native AI copilot can help you achieve your goals.
            Book a personalized demo and discover the impact on your product.
          </SubHeading>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="h-full w-full">
                <Label>First Name *</Label>
                <Input
                  type="text"
                  required
                  className="mt-2 border-none focus:ring-gray-300"
                  placeholder="John"
                />
              </div>
              <div className="h-full w-full">
                <Label>Last Name *</Label>
                <Input
                  type="text"
                  required
                  className="mt-2 border-none focus:ring-gray-300"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div className="h-full w-full">
              <Label>Work Email *</Label>
              <Input
                type="email"
                required
                className="mt-2 border-none focus:ring-gray-300"
                placeholder="john@yourcompany.com"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="h-full w-full">
                <Label>Company *</Label>
                <Input
                  type="text"
                  required
                  className="mt-2 border-none focus:ring-gray-300"
                  placeholder="Your Company"
                />
              </div>
              <div className="h-full w-full">
                <Label>Job Title *</Label>
                <Input
                  type="text"
                  required
                  className="mt-2 border-none focus:ring-gray-300"
                  placeholder="Product Manager"
                />
              </div>
            </div>

            {/* Primary Goal */}
            <div className="h-full w-full">
              <Label>What's your primary goal? *</Label>
              <div className="mt-3 grid grid-cols-1 gap-3">
                {goals.map((goal) => (
                  <label
                    key={goal}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 bg-white p-4 transition-all dark:bg-neutral-900 ${
                      selectedGoal === goal
                        ? "border-brand bg-brand/5 dark:bg-brand/10"
                        : "border-gray-200 hover:border-brand/50 dark:border-neutral-700 dark:hover:border-brand/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="goal"
                      value={goal}
                      checked={selectedGoal === goal}
                      onChange={(e) => setSelectedGoal(e.target.value)}
                      className="h-4 w-4 border-gray-300 text-brand focus:ring-brand"
                      required
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-neutral-100">
                      {goal}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Company Size */}
            <div className="h-full w-full">
              <Label>Company Size *</Label>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {companySizes.map((size) => (
                  <label
                    key={size}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 bg-white p-3 transition-all dark:bg-neutral-900 ${
                      selectedCompanySize === size
                        ? "border-brand bg-brand/5 dark:bg-brand/10"
                        : "border-gray-200 hover:border-brand/50 dark:border-neutral-700 dark:hover:border-brand/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="companySize"
                      value={size}
                      checked={selectedCompanySize === size}
                      onChange={(e) => setSelectedCompanySize(e.target.value)}
                      className="h-4 w-4 border-gray-300 text-brand focus:ring-brand"
                      required
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-neutral-100">
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="h-full w-full">
              <Label>Tell us more about your needs (optional)</Label>
              <Textarea
                className="mt-2 border-none focus:ring-gray-300"
                placeholder="Share any specific challenges or questions you'd like to discuss..."
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full">
              Book a Demo
            </Button>

            <p className="text-center text-xs text-gray-500 dark:text-neutral-400">
              By submitting this form, you agree to receive communications from
              Tandem. We respect your privacy.
            </p>
          </form>
        </div>
        <AuthIllustration />
      </div>
    </Container>
  );
};
