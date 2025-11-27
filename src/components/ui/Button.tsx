"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1e293b] text-white shadow-lg hover:shadow-xl hover:bg-[#0f172a] border border-transparent",
  secondary:
    "bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300",
  ghost:
    "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  outline:
    "bg-transparent border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-medium rounded-lg",
  md: "px-5 py-2.5 text-sm font-medium rounded-xl",
  lg: "px-7 py-3.5 text-base font-medium rounded-xl",
  icon: "p-2 rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", className = "", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`
          inline-flex items-center justify-center gap-2
          transition-all duration-200
          cursor-pointer
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
