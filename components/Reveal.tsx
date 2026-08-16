"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * 08 — Motion. translateY(16px) → 0 with a fade, 620ms, staggered 60ms per
 * line, once on first view. Nothing bounces, nothing loops, nothing repeats
 * on scroll back up.
 *
 * prefers-reduced-motion is handled in globals.css rather than here, so the
 * markup and the observer stay identical in both cases and there is no
 * hydration branch.
 */
type RevealProps = {
  children: ReactNode;
  /** Stagger index. Delay resolves to index × --gl-stagger. */
  index?: number;
  as?: ElementType;
  className?: string;
};

export default function Reveal({
  children,
  index = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Already in view on load (the hero): reveal on the next frame so the
    // transition has a starting state to move from.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className ? `gl-reveal ${className}` : "gl-reveal"}
      data-revealed={revealed ? "true" : "false"}
      style={{ "--gl-reveal-delay": `calc(${index} * var(--gl-stagger))` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
