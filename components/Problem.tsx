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
      className="border-y border-ink-16 py-vast"
    >
      <div className="gl-shell">
        <Reveal>
          {/* Hand-broken, not balanced. text-balance evened the three lines to
              within 16px of each other, which reads as a justified block; the
              tension in this direction comes from a long line against a short
              one. The opening line is measured to hit the trim. */}
          <h2 id="problem-heading" className="gl-display">
            <span className="block">You moved here</span>
            <span className="block">in March.</span>
            <span className="block">You still eat</span>
            <span className="block">dinner alone.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
