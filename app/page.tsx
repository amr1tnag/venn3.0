import Cta from "@/components/Cta";
import EventFormats from "@/components/EventFormats";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Problem from "@/components/Problem";
import Steps from "@/components/Steps";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Steps />
        <EventFormats />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
