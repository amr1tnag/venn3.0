import fs from "node:fs";
import path from "node:path";

import Reveal from "./Reveal";
import { site } from "@/lib/site";

/** The full-bleed plate (04). A colour original — 05 grades it in CSS. */
const PLATE = "/hero/trek.jpg";

/**
 * Resolved once, at build. A missing plate falls back to the flat ink ground
 * rather than a broken image, so the hero is never half-rendered — drop the
 * file in and the photograph takes over on the next build.
 */
const hasPlate = fs.existsSync(path.join(process.cwd(), "public", PLATE));

/**
 * 07 — Hero. Inverted: the opening view is ink, not paper, and the type sets
 * in chalk over it. The surface runs edge to edge and passes behind the nav
 * (07 switches the bar to chalk while it is over this section), so the page
 * opens on one uninterrupted ground.
 *
 * Composition follows the full-bleed plate (04). A mono row sits under the
 * bar, the display block sits on the baseline of the frame, and the event
 * line closes it as a second mono row rather than the card it used to get —
 * on a full-bleed ground a boxed panel fights the surface.
 *
 * Two grounds, picked at build. With the plate present the photograph carries
 * the section and the grain runs at the photo opacity on its own layer; with
 * it absent the section falls back to flat ink. The type and the composition
 * are the same either way.
 *
 * 03 — no grid lines here. The plate is what frames this block, and a grid
 * over a photograph is texture on texture. The field moves to 02, which is
 * the emptiness the grid exists to frame. The closing hairline stays: with
 * the grid gone it is the only rule in the block, so the two never meet.
 */
export default function Hero() {
  const { activity, neighbourhood, day, time, pairs, spotsLeft } =
    site.nextEvent;

  return (
    <section
      id="top"
      className={`gl-ink-surface relative isolate -mt-nav flex min-h-svh flex-col justify-between overflow-hidden pb-tight pt-nav ${
        hasPlate ? "" : "gl-grain gl-grain--ink"
      }`}
    >
      {hasPlate ? (
        <>
          {/* The LCP element — a lazy hero is a blank first paint. */}
          <img
            src={PLATE}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="gl-hero-plate"
          />
          <div aria-hidden="true" className="gl-hero-scrim" />
          <div aria-hidden="true" className="gl-hero-grain" />
        </>
      ) : null}

      {/* Mono meta. No rule over it: the bar's own bottom edge already
          divides this from the nav, and a second line 40px under the first
          read as a double rule. The row sits straight under the bar. */}
      <div className="gl-shell relative z-[3] w-full pt-6">
        <div className="flex items-baseline justify-between gap-6">
          <p className="gl-meta text-chalk-45">
            Mumbai <span className="hidden sm:inline">/ Weekends </span>/ Pairs
            first
          </p>
          <p className="gl-meta shrink-0 text-chalk-45">&copy;2026</p>
        </div>
      </div>

      <div className="gl-shell relative z-[3] w-full">
        <h1 className="gl-display text-paper">
          {/* Hand-broken lines. Each reveals on its own beat. */}
          <Reveal as="span" index={0} className="block">
            Bombay is loud.
          </Reveal>
          <Reveal as="span" index={1} className="block">
            You still don&rsquo;t
          </Reveal>
          <Reveal as="span" index={2} className="block">
            know anyone.
          </Reveal>
        </h1>

        <div className="mt-8 max-w-[34ch] md:mt-10">
          <p className="gl-lead text-chalk-70">
            We pair you with one other person who also just landed, then put{" "}
            {pairs} pairs in the same room on Saturday.
          </p>

          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gl-button gl-button--invert mt-8 w-full sm:w-auto"
          >
            Get paired
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* The tail. This weekend's room, set as a mono line. */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-chalk-20 pt-4 md:mt-12">
          <p className="gl-meta text-chalk-45">
            {activity} &mdash; {neighbourhood} &mdash; {day} {time}
          </p>
          {/* 02 — the accent budget for this viewport, spent once. */}
          <p className="gl-badge gl-meta shrink-0">{spotsLeft} spots left</p>
        </div>
      </div>
    </section>
  );
}
