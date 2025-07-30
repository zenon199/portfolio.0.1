"use client";

import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
  actionText: string;
}

export default function ActionButton({ actionText }: ActionButtonProps) {
  const router = useRouter();

  function navigateTo(path: string) {
    router.push(path);
  }
  // If screen size is small don't show this button
  if (typeof window !== "undefined" && window.innerWidth < 389) return null;
  return (
    <Button onClick={() => navigateTo("/#contact")}>
      <CheckCircle className="mr-2 h-4 w-4" />
      {actionText}
    </Button>
  );
}
