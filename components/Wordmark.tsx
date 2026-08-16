/**
 * 06 — Wordmark. Lowercase, Archivo 700, tracking −0.03em. The ® is glued to
 * the last letter, sized 0.42em, aligned to the cap line of the d, and never
 * gets space of its own. Minimum 15px. Never set in Signal, never outlined.
 *
 * The ® appears on the nav lockup, the footer lockup, and once as an oversized
 * decorative mark per page. Never twice in the same view.
 */
export default function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className ? `gl-wordmark ${className}` : "gl-wordmark"}>
      getlanded<sup aria-hidden="true">®</sup>
    </span>
  );
}
