import GridLines from "./GridLines";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

/* TODO: swap for the live WhatsApp invite before launch. */
const WHATSAPP_URL = site.whatsappUrl;

/**
 * 05 — The group. The one inversion on the page: ink surface, paper type,
 * grid lines in chalk. Grain runs at the ink opacity rather than the paper
 * one, so the plate reads the same weight against a dark ground.
 *
 * 06 — The WhatsApp mark is deliberately absent. The word is set as type.
 */
export default function Cta() {
  return (
    <section
      id="the-group"
      aria-labelledby="cta-heading"
      className="gl-ink-surface gl-grain gl-grain--ink scroll-mt-nav relative flex min-h-svh flex-col justify-center overflow-hidden py-24 md:py-40"
    >
      <GridLines tone="chalk" />

      <div className="gl-shell relative z-[3] w-full">
        <Reveal>
          <p className="gl-meta text-chalk-45">The group</p>
          <h2 id="cta-heading" className="gl-display mt-6 max-w-[16ch]">
            The group is on WhatsApp.
          </h2>
        </Reveal>

        <p className="gl-lead mt-8 max-w-[46ch] text-chalk-70">
          Everyone who has been to one event is in it. Nobody is added before
          their first Saturday.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="gl-button gl-button--invert mt-12 w-full sm:w-auto"
        >
          Join the group
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
