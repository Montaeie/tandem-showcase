import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./button";
import { FacebookIcon, GoogleIcon, AppleIcon } from "@/icons/general";
import Link from "next/link";
import { AuthIllustration } from "./auth-illustration";

export const SignUp = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
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
            Get Started with Tandem
          </Heading>
          <SubHeading as="p" className="mt-4 max-w-xl text-left">
            Join Qonto, Aircall, Sellsy and other leading companies using Tandem to guide millions of users. Start your free trial today.
          </SubHeading>
          <form className="mt-6 flex flex-col gap-6">
            <div className="h-full w-full">
              <Label>Full Name *</Label>
              <Input
                type="text"
                required
                className="mt-2 border-none focus:ring-gray-300"
                placeholder="John Smith"
              />
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
            <div className="h-full w-full">
              <Label>Company Name *</Label>
              <Input
                type="text"
                required
                className="mt-2 border-none focus:ring-gray-300"
                placeholder="Your Company"
              />
            </div>
            <div className="h-full w-full">
              <Label>Password *</Label>
              <Input
                type="password"
                required
                className="mt-2 border-none focus:ring-gray-300"
                placeholder="Create a secure password"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-neutral-400">
                Minimum 8 characters
              </p>
            </div>
            <Button type="submit" className="w-full">Start Free Trial</Button>
            <p className="text-center text-xs text-gray-500 dark:text-neutral-400">
              By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required.
            </p>
            <div className="mt-2 flex items-center">
              <div className="h-px flex-1 bg-gray-200 dark:bg-neutral-700"></div>
              <span className="px-4 text-sm text-gray-500 dark:text-neutral-400">
                or
              </span>
              <div className="h-px flex-1 bg-gray-200 dark:bg-neutral-700"></div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Button
                variant="secondary"
                className="flex w-full items-center justify-center gap-2 py-4"
                type="button"
              >
                <GoogleIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Google</span>
              </Button>
              <Button
                variant="secondary"
                className="flex w-full items-center justify-center gap-2 py-4"
                type="button"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Facebook</span>
              </Button>
              <Button
                variant="secondary"
                className="flex w-full items-center justify-center gap-2 py-4"
                type="button"
              >
                <AppleIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Apple</span>
              </Button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?{" "}
            </span>
            <Link
              href="/sign-in"
              className="text-brand text-sm font-medium hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
        <AuthIllustration />
      </div>
    </Container>
  );
};

export default SignUp;
