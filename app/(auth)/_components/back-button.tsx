import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface BackButtonProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export const BackButton = ({ href, label, children }: BackButtonProps) => {
  return (
    <div className="flex gap-2 justify-center items-cener w-full">
      <p className="text-sm text-gray-400 font-light">{label}</p>
      <Link href={href}>{children}</Link>
    </div>
  );
};
