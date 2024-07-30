"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
}

export const BackButton: FC<BackButtonProps> = ({ href }) => {
  const router = useRouter();

  return (
    <Button
      className="mb-8 flex flex-row items-center text-red-500 no-underline hover:text-red-500/70"
      onClick={() => router.back()}
    >
      <ChevronLeft size={17} />
      Back
    </Button>
  );
};
