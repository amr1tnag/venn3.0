import Wordmark from "./Wordmark";
import { site } from "@/lib/site";

/**
 * 06 — Footer lockup. The meta row sits under a hairline, and the wordmark
 * closes the page.
 *
 * The mark is set at the same step as the nav lockup, so the two bookend the
 * page at one size. 06 allots an oversized decorative ® per page; this page
 * does not spend it, which keeps the display type the largest thing on it.
 *
 * The padding is the footer's own, not a step on the section rhythm. Those
 * steps are sized for full blocks: --gl-space-tight put 88px under a 20px
 * mark, which left the lockup floating over a void instead of closing the
 * page. 32/40 sets it against the type it actually follows, with the heavier
 * half below so the page reads as landing rather than stopping.
 */
export default function Footer() {
  return (
    <footer className="border-t border-ink-16 pb-10 pt-8">
      <div className="gl-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
          <p className="gl-meta text-ink-40">
            Weekends in Mumbai / Pairs first
          </p>

          <div className="flex items-baseline gap-6">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gl-meta inline-block py-2 transition-colors duration-hover ease-in-out hover:text-signal"
            >
              Instagram
            </a>
            <p className="gl-meta text-ink-40">©2026</p>
          </div>
        </div>

        {/* Decorative — the nav lockup already names the brand for assistive
            tech, so this one is hidden from it. text-lead/leading-none is the
            nav lockup's own sizing; the two marks stay in step. */}
        <Wordmark
          aria-hidden="true"
          className="mt-6 inline-block text-lead leading-none"
        />
      </div>
    </footer>
  );
}
