import React from "react";
import { Container } from "./container";
import { DivideX } from "./divide";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

export const Security = () => {
  return (
    <>
      <Container className="border-divide border-x">
        <h2 className="pt-10 pb-5 text-center font-mono text-sm tracking-tight text-neutral-500 uppercase md:pt-20 md:pb-10 dark:text-neutral-400">
          Enterprise-grade security and compliance
        </h2>
      </Container>
      <DivideX />
      <Container className="border-divide grid grid-cols-1 border-x bg-gray-100 px-8 py-12 md:grid-cols-2 dark:bg-neutral-900">
        <div>
          <SectionHeading className="text-left">
            Your data, protected at every level
          </SectionHeading>
          <SubHeading as="p" className="mt-4 text-left">
            Tandem is built with enterprise-grade security and compliance. SOC2 Type II certified, GDPR compliant, and AES-256 encryption ensure your data and your users' data are always protected.
          </SubHeading>
          <Button
            className="mt-4 mb-8 inline-block w-full md:w-auto"
            as={Link}
            href="/contact"
          >
            Book a demo
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 md:flex md:flex-wrap md:items-center md:justify-center md:gap-8">
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-3 shadow-md dark:bg-neutral-800">
              <span className="text-center text-xs font-bold text-gray-900 dark:text-white">SOC2<br/>Type II</span>
            </div>
            <span className="mt-2 text-xs text-gray-600 dark:text-neutral-400">Certified</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/logos/GDPR.png"
              alt="GDPR Compliant"
              height={100}
              width={100}
              className="h-20 w-auto"
              draggable={false}
            />
            <span className="mt-2 text-xs text-gray-600 dark:text-neutral-400">Compliant</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/logos/ISO.png"
              alt="ISO 27001"
              height={100}
              width={100}
              className="h-20 w-auto"
              draggable={false}
            />
            <span className="mt-2 text-xs text-gray-600 dark:text-neutral-400">27001</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-3 shadow-md dark:bg-neutral-800">
              <span className="text-center text-xs font-bold text-gray-900 dark:text-white">AES-256<br/>Encryption</span>
            </div>
            <span className="mt-2 text-xs text-gray-600 dark:text-neutral-400">Standard</span>
          </div>
        </div>
      </Container>
    </>
  );
};
