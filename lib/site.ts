/**
 * Copy and links that change week to week. The design tokens live in
 * globals.css; the facts live here.
 *
 * 09 — Voice. Numbers are load-bearing: 15 pairs, 30 people, 3 spots left,
 * Sat 22 Aug. Never "a few".
 */
export const site = {
  /** The live group invite. Every CTA on the page points here. */
  whatsappUrl: "https://chat.whatsapp.com/BLWsYr3p8Dt5rNo2M1Yadw",
  instagramUrl: "https://instagram.com/getlanded",
  instagramHandle: "@getlanded",

  /** This weekend's room. One event surfaces on the page at a time. */
  nextEvent: {
    code: "GL-0822-BG",
    activity: "Board games",
    neighbourhood: "Bandra West",
    day: "Sat 22 Aug",
    time: "6:30 pm",
    pairs: 15,
    people: 30,
    spotsLeft: 3,
  },
} as const;
