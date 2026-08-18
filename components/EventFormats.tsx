import GridLines from "./GridLines";
import Reveal from "./Reveal";

/**
 * 04 — Event formats. Editorial photo grid, staggered ratios and offsets,
 * grid lines off (05: the photography carries this block, not the frame).
 *
 * Add, remove or reorder a format by editing this array alone. `span` and
 * `offset` are 12-column placements; `width`/`height` are the intrinsic
 * pixel dimensions of the file and are set on the img so the box is
 * reserved before the image decodes — no layout shift.
 *
 * TODO: replace /public/events/*.jpg with real event photography.
 * Every frame here is a written brief waiting for a real photograph.
 * Treatment on swap: grayscale(1) contrast(1.18) — applied in CSS below,
 * so the source files stay untouched colour originals.
 */
type Format = {
  slug: string;
  name: string;
  place: string;
  /** Alt text describes the photograph, not the format label. */
  alt: string;
  width: number;
  height: number;
  span: string;
  offset?: string;
};

const FORMATS: Format[] = [
  {
    slug: "board-games",
    name: "Cafe board games",
    place: "Bandra West",
    alt: "Hands mid-move over a board game, eight glasses crowding the table",
    width: 1600,
    height: 1100,
    span: "md:col-span-7",
  },
  {
    slug: "karaoke",
    name: "Karaoke night",
    place: "Khar",
    alt: "Two people sharing one microphone, both singing slightly off key",
    width: 1000,
    height: 1300,
    span: "md:col-span-4",
    offset: "md:col-start-9 md:mt-24",
  },
  {
    slug: "climbing",
    name: "Rock climbing",
    place: "Powai",
    alt: "Chalk on a climbing hold, a forearm mid-reach, shoulder cut by the frame",
    width: 1000,
    height: 1300,
    span: "md:col-span-4",
    offset: "md:col-start-2",
  },
  {
    slug: "jamming",
    name: "Jam sessions",
    place: "Versova",
    alt: "Three guitarists around one amplifier in a rehearsal room",
    width: 1600,
    height: 1000,
    span: "md:col-span-6",
    offset: "md:col-start-7 md:mt-32",
  },
  {
    slug: "mma",
    name: "MMA sessions",
    place: "Lower Parel",
    alt: "Two people sparring in gloves on a gym mat, coach shouting off-frame",
    width: 1200,
    height: 1200,
    span: "md:col-span-5",
  },
  {
    slug: "trekking",
    name: "Trekking",
    place: "Matheran",
    alt: "A line of people walking a ridge at dawn, nobody talking yet",
    width: 1500,
    height: 1000,
    span: "md:col-span-6",
    offset: "md:col-start-7 md:mt-16",
  },
];

export default function EventFormats() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="scroll-mt-nav pb-tight"
    >
      {/* Opener band. The long lead-in is the emptiness the grid frames, so
          the rules that separate this section are drawn as columns rather
          than as a border on the section itself. */}
      <div className="relative overflow-hidden pb-tight pt-loose">
        <GridLines tone="ink" crossAt="28%" />
        <div className="gl-shell relative z-[3]">
          <Reveal>
            <p className="gl-meta text-ink-40">
              Six formats / Four rooms a month
            </p>
            <h2 id="events-heading" className="gl-headline mt-4">
              {/* Broken at the sentence, not mid-clause. */}
              <span className="block">Four rooms a month.</span>
              <span className="block">Pick the one you can survive.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Photo grid. Captions carry hairlines, so no grid lines here. */}
      <div className="gl-shell">
        <ul className="grid gap-12 md:grid-cols-12 md:gap-x-gutter md:gap-y-24">
          {FORMATS.map((format) => (
            <li
              key={format.slug}
              className={`${format.span} ${format.offset ?? ""}`}
            >
              {/* 08 — the frame never moves; .gl-photo scales the image inside it. */}
              <div className="gl-photo gl-grain gl-grain--photo bg-ink">
                <img
                  src={`/events/${format.slug}.jpg`}
                  alt={format.alt}
                  width={format.width}
                  height={format.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="mt-3 flex items-baseline justify-between gap-4 border-t border-ink-16 pt-3">
                <p className="gl-meta">{format.name}</p>
                <p className="gl-meta shrink-0 text-ink-40">{format.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
