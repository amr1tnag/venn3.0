import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Sections 2–6 land here once the direction is approved:
            the problem, how it works, event formats, WhatsApp CTA, footer. */}
      </main>
    </>
  );
}
