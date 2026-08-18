import type { Config } from "tailwindcss";

/**
 * Every value here is a pointer at a custom property declared in
 * app/globals.css. Nothing is redefined — the config mirrors the token file
 * so utilities and CSS resolve to the same source. To reskin the site, edit
 * globals.css only.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--gl-ink)",
          80: "var(--gl-ink-80)",
          60: "var(--gl-ink-60)",
          40: "var(--gl-ink-40)",
          16: "var(--gl-ink-16)",
          8: "var(--gl-ink-08)",
        },
        paper: {
          DEFAULT: "var(--gl-paper)",
          dim: "var(--gl-paper-dim)",
        },
        card: "var(--gl-card)",
        signal: "var(--gl-signal)",
        chalk: {
          70: "var(--gl-chalk-70)",
          45: "var(--gl-chalk-45)",
          20: "var(--gl-chalk-20)",
          10: "var(--gl-chalk-10)",
        },
      },
      fontFamily: {
        grotesk: "var(--gl-font-grotesk)",
        mono: "var(--gl-font-mono)",
      },
      fontSize: {
        // Five sizes. There is no sixth.
        display: [
          "var(--gl-size-display)",
          {
            lineHeight: "var(--gl-leading-display)",
            letterSpacing: "var(--gl-tracking-display)",
            fontWeight: "var(--gl-weight-display)",
          },
        ],
        headline: [
          "var(--gl-size-headline)",
          {
            lineHeight: "var(--gl-leading-headline)",
            letterSpacing: "var(--gl-tracking-headline)",
            fontWeight: "var(--gl-weight-headline)",
          },
        ],
        lead: [
          "var(--gl-size-lead)",
          {
            lineHeight: "var(--gl-leading-lead)",
            letterSpacing: "var(--gl-tracking-lead)",
          },
        ],
        body: [
          "var(--gl-size-body)",
          {
            lineHeight: "var(--gl-leading-body)",
            letterSpacing: "var(--gl-tracking-body)",
          },
        ],
        meta: [
          "var(--gl-size-meta)",
          {
            lineHeight: "var(--gl-leading-meta)",
            letterSpacing: "var(--gl-tracking-meta)",
            fontWeight: "var(--gl-weight-meta)",
          },
        ],
      },
      spacing: {
        margin: "var(--gl-margin)",
        gutter: "var(--gl-gutter)",
        nav: "var(--gl-nav-height)",
        crosshair: "var(--gl-crosshair-size)",
        hairline: "var(--gl-hairline)",
        tight: "var(--gl-space-tight)",
        base: "var(--gl-space-base)",
        loose: "var(--gl-space-loose)",
        vast: "var(--gl-space-vast)",
      },
      backdropBlur: {
        nav: "var(--gl-nav-blur)",
      },
      maxWidth: {
        shell: "var(--gl-max-width)",
      },
      borderRadius: {
        DEFAULT: "var(--gl-radius)",
        none: "0",
      },
      transitionTimingFunction: {
        out: "var(--gl-ease-out)",
        "in-out": "var(--gl-ease-in-out)",
      },
      transitionDuration: {
        reveal: "620ms",
        hover: "140ms",
      },
      boxShadow: {
        // The system is shadowless. Elevation is carried by --gl-card only.
        none: "none",
      },
    },
  },
  plugins: [],
};

export default config;
