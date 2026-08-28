"use client";

import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";
import { site } from "@/lib/site";

/**
 * 07 — Nav. Sticky, 68px, anchors only — this is a single page.
 *
 * Two states. Over the hero plate (04) the bar carries no surface of its own:
 * the photograph runs behind it and the lockup and links set in chalk. Once
 * the plate has passed under it the bar takes its paper surface back, with
 * the one blur in the system.
 *
 * The switch is observed, not scroll-measured: an IntersectionObserver on the
 * plate with the bar's own height as a negative top inset fires exactly when
 * the plate's bottom edge crosses the bar. A scroll handler would run on every
 * frame to answer the same question.
 */
export default function Nav() {
  // Starts true: the first paint is at the top of the page, on the plate.
  // Rendering paper first and correcting on mount would flash.
  const [overPlate, setOverPlate] = useState(true);

  useEffect(() => {
    const plate = document.getElementById("top");
    if (!plate) return;

    const navHeight =
      Number.parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--gl-nav-height",
        ),
        10,
      ) || 68;

    const observer = new IntersectionObserver(
      ([entry]) => setOverPlate(entry.isIntersecting),
      { rootMargin: `-${navHeight}px 0px 0px 0px`, threshold: 0 },
    );

    observer.observe(plate);
    return () => observer.disconnect();
  }, []);

  const link = overPlate ? "text-chalk-70" : "text-ink-80";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-hover ease-in-out ${
        overPlate
          ? "gl-nav--over border-chalk-20"
          : "gl-nav border-ink-16 text-ink"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-nav max-w-shell items-center justify-between px-margin"
      >
        {/* py-2 lifts the hit area past the 24px minimum; the bar height is unchanged. */}
        <a href="#top" className="inline-block py-2 text-lead leading-none">
          <Wordmark />
          <span className="sr-only">getlanded, back to top</span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#how-it-works"
            className={`hidden text-body transition-colors duration-hover ease-in-out hover:text-signal sm:block ${link}`}
          >
            How it works
          </a>
          <a
            href="#events"
            className={`hidden text-body transition-colors duration-hover ease-in-out hover:text-signal sm:block ${link}`}
          >
            Events
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`gl-button gap-3 px-4 py-3 ${
              overPlate ? "gl-button--invert" : ""
            }`}
          >
            Get paired
          </a>
        </div>
      </nav>
    </header>
  );
}
