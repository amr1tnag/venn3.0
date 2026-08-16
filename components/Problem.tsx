import Reveal from "./Reveal";

/**
 * 02 — The problem. A pause in the page.
 *
 * Full-bleed hairlines top and bottom, nothing between them but type and
 * empty margin. Grid lines are off here: 03 says hairlines and grid lines
 * never appear in the same block, and this block is bounded by hairlines.
 *
 * 09 — Voice. Named numbers, no self-pity, and the loneliness is never
 * named out loud. "You moved here in March", not "feeling lonely in a new
 * city? we get it".
 */
export default function Problem() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="border-y border-ink-16 py-24 md:py-40"
    >
      <div className="gl-shell">
        <Reveal>
          <h2
            id="problem-heading"
            className="gl-headline max-w-[44ch] text-balance"
          >
            You moved here in March. You know your flatmate, four people at
            work, and the man who makes your chai. Saturday comes around and the
            list runs out.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
