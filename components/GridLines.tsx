/**
 * 03 — Grid. Vertical lines only, at 8% ink or 10% chalk, with + crosshairs
 * at the intersections. These are the decorative grid: they belong to heroes,
 * full-bleed photographic sections and section openers — the places where the
 * grid frames emptiness. Once a block fills with content, the lines turn off
 * and horizontal hairlines take over. The two never appear in the same block.
 *
 * Rendered as a sibling layer, not a background, so the crosshairs can sit at
 * real intersections. aria-hidden throughout: this is a frame, not content.
 */
type GridLinesProps = {
  /** Line colour ramp. Ink for paper surfaces, chalk for inverted ones. */
  tone?: "ink" | "chalk";
  /** Columns drawn at each breakpoint. The 12-col field collapses to 4 on mobile. */
  className?: string;
  /**
   * Height at which the crosshair row sits, as a CSS length or percentage.
   * Defaults to the vertical midpoint. Override where the midpoint would land
   * on type — a rule touching a letterform is a bug, not a texture.
   */
  crossAt?: string;
};

export default function GridLines({
  tone = "ink",
  className,
  crossAt = "50%",
}: GridLinesProps) {
  const line = tone === "ink" ? "var(--gl-ink-08)" : "var(--gl-chalk-10)";
  const cross = tone === "ink" ? "var(--gl-ink-16)" : "var(--gl-chalk-20)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[2] ${className ?? ""}`}
    >
      <div className="mx-auto flex h-full max-w-shell px-margin">
        {/* 4 columns below 768px, 8 up to 1024px, 12 above. Every division
            lands on the same 12-col field, so nothing shifts on resize. */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={[
              "relative h-full flex-1",
              i > 3 ? "hidden md:block" : "",
              i > 7 ? "md:hidden lg:block" : "",
            ].join(" ")}
            style={{ borderRight: i === 11 ? "none" : `1px solid ${line}` }}
          >
            {/* Crosshair marking the column intersection. */}
            {i !== 11 ? (
              <span
                className="gl-crosshair absolute right-0 block translate-x-1/2 -translate-y-1/2"
                style={{
                  top: crossAt,
                  backgroundImage: `linear-gradient(${cross}, ${cross}), linear-gradient(${cross}, ${cross})`,
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
