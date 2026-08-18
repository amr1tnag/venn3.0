import GridLines from "./GridLines";
import Reveal from "./Reveal";

/**
 * 04 — This weekend. A uniform six-up grid, three across.
 *
 * The exported frames are COMPOSED CARDS: the WK label, the spots badge, the
 * title, the hairline and the location/time are part of the photograph, not
 * markup. So nothing is overlaid here — a second title in HTML would print
 * the same words twice. Each frame's alt text carries everything the pixels
 * say, because for a screen reader the pixels say nothing.
 *
 * Every frame is 1284x1160, so the grid stays honest without cropping and
 * the boxes are reserved before the images decode.
 *
 * TODO: as the lineup changes week to week, re-export the frames at
 * 1284x1160 and update `alt` to match the new baked-in copy.
 */
type Frame = {
  slug: string;
  /** Everything printed on the frame, in reading order. */
  alt: string;
};

const FRAMES: Frame[] = [
  {
    slug: "bouldering",
    alt: "Week 34, frame 1, three spots left. Bouldering, beginners welcome. Bandra West, Saturday 18:30. Climbers on a bouldering wall photographed from above.",
  },
  {
    slug: "mma",
    alt: "Week 34, frame 2. MMA intro. Andheri East, Sunday 08:00. Gloves and wraps on a gym floor.",
  },
  {
    slug: "board-games",
    alt: "Week 34, frame 3. Board games, no rules explained twice. Lower Parel, Friday 20:00. Cards and hands across a crowded table.",
  },
  {
    slug: "open-mic",
    alt: "Week 34, frame 4. Open mic and guitar circle. Versova, Saturday 19:00. A crowd under strung lights facing a small stage.",
  },
  {
    slug: "karaoke",
    alt: "Week 34, frame 5, two spots left. Karaoke. Colaba, Friday 21:30. A lyric screen glowing in a dark room.",
  },
  {
    slug: "sunrise-trek",
    alt: "Week 34, frame 6. Sunrise trek. Sanjay Gandhi National Park, Sunday 05:45. A line of walkers climbing a ridge at dawn.",
  },
];

export default function EventFormats() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="scroll-mt-nav pb-tight"
    >
      {/* Opener band. Grid lines only — the rules live on the frames. */}
      <div className="relative overflow-hidden pb-tight pt-loose">
        <GridLines tone="ink" crossAt="28%" />
        <div className="gl-shell relative z-[3]">
          <Reveal>
            <div className="flex items-baseline justify-between gap-6">
              <p className="gl-meta text-ink-40">Week 34 / This weekend</p>
              <p className="gl-meta shrink-0 text-ink-40">Six rooms</p>
            </div>
            <h2 id="events-heading" className="gl-headline mt-4">
              <span className="block">Six rooms this weekend.</span>
              <span className="block">Pick the one you can survive.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* The grid. Uniform three-up, one gutter, no offsets — the frames
          carry the rhythm now, so the layout gets out of their way. */}
      <div className="gl-shell">
        <ul className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {FRAMES.map((frame) => (
            <li key={frame.slug} className="gl-photo bg-ink">
              <img
                src={`/events/${frame.slug}.jpg`}
                alt={frame.alt}
                width={1284}
                height={1160}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>

        <p className="gl-meta mt-6 border-t border-ink-16 pt-4 text-ink-40">
          Six frames / Pairs of two / Hosted
        </p>
      </div>
    </section>
  );
}
