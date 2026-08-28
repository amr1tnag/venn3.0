import GridLines from "./GridLines";
import Reveal from "./Reveal";

/**
 * 02 — The problem. A pause in the page.
 *
 * Nothing here but type and empty margin, which is exactly what 03 builds
 * the grid to frame — so the field runs here rather than over the hero's
 * plate. The bounding hairlines come off to pay for it: 03 keeps hairlines
 * and grid lines out of the same block, and between an ink hero above and a
 * paper section below this block does not need ruling to read as its own.
 *
 * 09 — Voice. Named numbers, no self-pity, and the loneliness is never
 * named out loud. "You moved here in March", not "feeling lonely in a new
 * city? we get it".
 */
export default function Problem() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="relative overflow-hidden py-vast"
    >
      {/* Crosshairs ride high, clear of the four display lines — a rule
          touching a letterform is a bug, not a texture. */}
      <GridLines tone="ink" crossAt="16%" />

      <div className="gl-shell relative z-[3]">
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
