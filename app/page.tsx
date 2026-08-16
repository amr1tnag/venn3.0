import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Problem from "@/components/Problem";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        {/* Sections 3–6 land here: how it works, event formats,
            WhatsApp CTA, footer. */}
      </main>
    </>
  );
}
