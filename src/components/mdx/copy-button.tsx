import { CopyPlus } from "lucide-react";
import React from "react";

import { toast } from "sonner";

const CopyButton = ({ id }: { id: string }) => {
  const handleCopy = async () => {
    const text = document.getElementById(id)?.textContent;
    try {
      await navigator.clipboard.writeText(text!);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Failed to copy");
    }
  };
  return (
    <div
      onClick={handleCopy}
      className="hover:scale-105 p-2 rounded-lg
       hover:bg-zinc-300 dark:hover:bg-zinc-900 cursor-pointer "
    >
     <CopyPlus className="h-5 w-5" />
    </div>
  );
};

export default CopyButton;