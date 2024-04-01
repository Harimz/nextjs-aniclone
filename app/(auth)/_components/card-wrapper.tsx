"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  backButtonAction: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  backButtonAction,
}: CardWrapperProps) => {
  return (
    <Card className="w-[450px] rounded-[5px] px-14 pt-10 pb-4 mx-auto mb-[25rem] border-none dark:bg-blue-400">
      <CardHeader>
        <h1 className="text-gray-400 font-bold text-2xl text-center">
          {headerLabel}
        </h1>
      </CardHeader>

      {children}

      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref}>
          <p className="text-sm text-blue-200 font-light">{backButtonAction}</p>
        </BackButton>
      </CardFooter>
    </Card>
  );
};
