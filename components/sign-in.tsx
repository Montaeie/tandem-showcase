import React from "react";
import { Container } from "./container";
import { LogoSVG } from "./logo";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./button";
import { FacebookIcon, GoogleIcon, AppleIcon } from "@/icons/general";
import Link from "next/link";
import { AuthIllustration } from "./auth-illustration";

export const SignIn = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <Container className="min-h-[calc(100vh-8rem)] py-10 md:py-20">
      <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 md:px-8 lg:gap-40">
        <div>
          <LogoSVG />
          <Heading className="mt-4 text-left lg:text-4xl">
            Welcome back!
          </Heading>
          <SubHeading as="p" className="mt-4 max-w-xl text-left">
            Sign in to access your Tandem dashboard and manage your AI copilot integrations.
          </SubHeading>
          <form className="mt-6 flex flex-col gap-6">
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
              <div className="flex items-center justify-between">
                <Label>Password *</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-brand hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                type="password"
                required
                className="mt-2 border-none focus:ring-gray-300"
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full">Sign in</Button>
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
              Don't have an account?{" "}
            </span>
            <Link
              href="/sign-up"
              className="text-brand text-sm font-medium hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
        <AuthIllustration />
      </div>
    </Container>
  );
};
