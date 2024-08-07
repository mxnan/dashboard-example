import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const BounceButton = ({ className }: { className?: string }) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className={cn(
          "rounded-xl bg-red-500 px-6 py-2 text-sm font-medium",
          className
        )}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        SyntaxUI
      </motion.button>
    </div>
  );
};

export default BounceButton;
