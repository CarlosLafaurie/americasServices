import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  locale?: string;
};

export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 900,
  decimals = 0,
  className,
  locale = "es-CO",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const supportsObserver =
    typeof window !== "undefined" && "IntersectionObserver" in window;
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion || !supportsObserver) {
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;
    const precision = 10 ** decimals;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(Math.round(value * eased * precision) / precision);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [decimals, duration, isInView, reduceMotion, supportsObserver, value]);

  const format = (number: number) =>
    number.toLocaleString(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  const displayValue =
    reduceMotion || !supportsObserver ? value : currentValue;
  const formattedValue = format(value);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${format(value)}${suffix}`}
      style={{ minInlineSize: `${`${prefix}${formattedValue}${suffix}`.length}ch` }}
    >
      {prefix}
      {format(displayValue)}
      {suffix}
    </span>
  );
}
