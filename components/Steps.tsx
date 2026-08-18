import GridLines from "./GridLines";
import Reveal from "./Reveal";

/**
 * 03 — How it works. Three steps, hairline-separated.
 *
 * The number owns its own grid column and the copy owns the next. No icons,
 * no cards, no boxes: the rule between steps is the only structure. On mobile
 * the number stacks above the copy and the columns collapse to one.
 *
 * scroll-mt-nav keeps the anchor target clear of the 68px sticky nav.
 */
const STEPS = [
  {
    n: "01",
    when: "Sunday",
    title: "Tell us about yourself",
    copy: "Eleven questions, two minutes. Where you moved from, what you do on a free evening, how loud you like a room.",
  },
  {
    n: "02",
    when: "Tuesday",
    title: "We match you with one person",
    copy: "One match, not a feed. They also landed in Mumbai this year, and you get their name before you get the address.",
  },
  {
    n: "03",
    when: "Saturday",
    title: "You both walk into the same room",
    copy: "Fifteen pairs, one host, one activity. Thirty people who all turned up for the same reason. You never arrive alone.",
  },
];

export default function Steps() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-nav pb-tight"
    >
      {/* Opener band. Grid lines only — 03 forbids grid and hairline in the
          same block, so the rules live below and the frame lives here. */}
      <div className="relative overflow-hidden pb-tight pt-tight">
        <GridLines tone="ink" crossAt="14%" />
        <div className="gl-shell relative z-[3]">
          <Reveal>
            <p className="gl-meta text-ink-40">How matching works</p>
            <h2
              id="how-it-works-heading"
              className="gl-headline mt-4 max-w-[26ch] text-balance"
            >
              No small talk with strangers. You get one.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Step list. Hairlines only — no grid lines cross this block. */}
      <div className="gl-shell">
        <ol>
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="grid gap-4 border-t border-ink-16 py-8 md:grid-cols-12 md:gap-gutter md:py-12"
            >
              {/* Number column. Stacks above the copy below md. */}
              <div className="flex items-baseline justify-between gap-4 md:col-span-2 md:block">
                <p className="gl-meta">{step.n}</p>
                <p className="gl-meta text-ink-40 md:mt-2">{step.when}</p>
              </div>

              {/* Copy column. */}
              <div className="md:col-span-7 md:col-start-4">
                <h3 className="gl-lead max-w-[28ch]">{step.title}</h3>
                <p className="mt-3 max-w-[46ch] text-ink-60">{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
