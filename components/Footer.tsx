import Wordmark from "./Wordmark";
import { site } from "@/lib/site";

/**
 * 06 — Footer lockup. Hairline on top, minimal height, everything at meta
 * size. The ® rides the wordmark here; it does not appear twice on a page,
 * so the CTA above deliberately sets "WhatsApp" as plain type instead.
 */
export default function Footer() {
  return (
    <footer className="border-t border-ink-16 py-8">
      <div className="gl-shell flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
        <p className="text-body">
          <Wordmark />{" "}
          <span className="text-ink-60">
            &mdash; weekends in Mumbai, pairs first.
          </span>
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
    </footer>
  );
}
