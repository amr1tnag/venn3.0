import GridLines from "./GridLines";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

/**
 * 07 — Hero. Display 120px, grid lines visible, reveal on entry.
 *
 * The display lines are broken by hand and each is its own reveal step at
 * 60ms stagger. A wrapped 120px headline is a bug, so the clamp bottoms out
 * at 52px — at 375px "Bombay is loud." sets on one line with room to spare.
 */
export default function Hero() {
  const { activity, neighbourhood, day, pairs, people, spotsLeft } =
    site.nextEvent;

  return (
    <section
      id="top"
      className="gl-grain relative flex min-h-[calc(100svh-var(--gl-nav-height))] flex-col justify-end overflow-hidden pb-14 pt-20 md:pb-20"
    >
      <GridLines tone="ink" />

      <div className="gl-shell relative z-[3] w-full">
        {/* Mono meta, in the margin. 03 — the eyebrow rides the top rule. */}
        <div className="mb-12 flex items-baseline justify-between gap-6 border-t border-ink-16 pt-4 md:mb-20">
          <p className="gl-meta text-ink-40">
            Mumbai <span className="hidden sm:inline">/ Weekends </span>/ Pairs
            first
          </p>
          <p className="gl-meta shrink-0 text-ink-40">©2026</p>
        </div>

        <h1 className="gl-display">
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

        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-gutter">
          <div className="md:col-span-5">
            <p className="gl-lead max-w-[34ch] text-ink-80">
              We pair you with one other person who also just landed, then put{" "}
              {pairs} pairs in the same room on Saturday.
            </p>

            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gl-button mt-8 w-full sm:w-auto"
            >
              Get paired
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* This weekend. Sits in the right-hand columns against the grid,
              divided by a hairline rather than a box. */}
          <div className="md:col-span-4 md:col-start-8">
            <div className="border-t border-ink-16 pt-4">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="gl-meta text-ink-40">This Saturday</p>
                {/* 02 — the accent budget for this viewport, spent once. */}
                <p className="gl-badge gl-meta">{spotsLeft} spots left</p>
              </div>
              <p className="text-body text-ink-80">
                {activity} in {neighbourhood}. {pairs} pairs, {people} people,
                one host. {day}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
