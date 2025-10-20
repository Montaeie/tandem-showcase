import React from "react";
import { cn } from "@/lib/utils";

export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-center text-4xl font-semibold tracking-tight text-black md:text-5xl lg:text-7xl dark:text-white",
        className,
      )}
    >
      {children}
    </h1>
  );
};
