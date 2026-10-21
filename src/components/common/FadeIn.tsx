import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
};

const offsets = {
  up: { x: 0, y: 24 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
};

export default function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const supportsViewportObserver =
    typeof window !== "undefined" && "IntersectionObserver" in window;
  const offset =
    prefersReducedMotion || !supportsViewportObserver
      ? { x: 0, y: 0 }
      : offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: supportsViewportObserver ? 0.98 : 1, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 0.62,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
