import Wordmark from "./Wordmark";
import { site } from "@/lib/site";

/**
 * 06 — Footer lockup. The meta row sits under a hairline, and the oversized
 * wordmark closes the page.
 *
 * That mark is the system's one signature gesture: 06 allots exactly one
 * oversized decorative ® per page, and without it here the page never spends
 * it. The lockup is sized to the measure rather than to a step on the type
 * scale, the way a colophon is set.
 */
export default function Footer() {
  return (
    <footer className="border-t border-ink-16 pb-tight pt-8">
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

        {/* The oversized mark. Decorative — the nav lockup already names the
            brand for assistive tech, so this one is hidden from it. */}
        <Wordmark aria-hidden="true" className="gl-wordmark-xl mt-10" />
      </div>
    </footer>
  );
}
