"use client";
import { ArrowLeftCircleIcon } from "lucide-react";
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
      variant={"destructive"}
      className="flex gap-2 items-center"
      onClick={() => router.back()}
    >
      <ArrowLeftCircleIcon className="w-5 h-5" />
      Back
    </Button>
  );
};
