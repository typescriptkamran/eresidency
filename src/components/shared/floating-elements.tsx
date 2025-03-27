"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 3,
  className = "",
  yOffset = 10,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [-yOffset, yOffset, -yOffset] }}
      transition={{
        repeat: Infinity,
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

interface FadeInElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeInElement({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  direction = "up",
}: FadeInElementProps) {
  const directionMap = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  const { x, y } = directionMap[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
