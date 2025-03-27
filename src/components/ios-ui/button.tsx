import { motion } from "framer-motion";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IOSButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  rounded?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function IOSButton({
  variant = "primary",
  size = "default",
  rounded = false,
  icon,
  children,
  className,
  ...props
}: IOSButtonProps) {
  // Map our variants to shadcn variants
  const variantMap = {
    primary: "default",
    secondary: "secondary",
    outline: "outline",
    ghost: "ghost",
  };

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className="touch-manipulation"
    >
      <ShadcnButton
        variant={variantMap[variant] as any}
        size={size}
        className={cn(
          "font-medium",
          rounded && "rounded-full",
          variant === "primary" && "bg-blue-500 hover:bg-blue-600",
          className,
        )}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </ShadcnButton>
    </motion.div>
  );
}
