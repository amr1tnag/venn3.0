import Wordmark from "./Wordmark";
import { site } from "@/lib/site";

/**
 * 07 — Nav. Sticky, 68px, paper with a hairline underneath. The one place
 * blur is used in the system. Anchors only — this is a single page.
 */
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-16 bg-[color:var(--gl-paper)]/85 backdrop-blur-[6px]">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-nav max-w-shell items-center justify-between px-margin"
      >
        <a href="#top" className="text-[19px] leading-none">
          <Wordmark />
          <span className="sr-only">getlanded, back to top</span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#how-it-works"
            className="hidden text-body text-ink-80 transition-colors duration-hover ease-in-out hover:text-signal sm:block"
          >
            How it works
          </a>
          <a
            href="#events"
            className="hidden text-body text-ink-80 transition-colors duration-hover ease-in-out hover:text-signal sm:block"
          >
            Events
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gl-button gap-3 px-4 py-3"
          >
            Get paired
          </a>
        </div>
      </nav>
    </header>
  );
}
