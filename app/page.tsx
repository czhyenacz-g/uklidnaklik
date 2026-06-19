import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import InquiryForm from "./components/InquiryForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SnapSection from "./components/SnapSection";
import { getContent } from "../lib/sheets";

export default async function Home() {
  const content = await getContent();

  return (
    <main>
      <Header />

      <SnapSection arrow={{ href: "#services", label: "Služby" }} prominent>
        <Hero />
      </SnapSection>

      <SnapSection arrow={{ href: "#jak-to-funguje", label: "Jak to funguje" }}>
        <Services services={content.services} />
      </SnapSection>

      <section className="py-10 sm:py-20 px-4 bg-[#3EC1D3]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 items-stretch">
          <SnapSection contentsOnDesktop arrow={{ href: "#fotky", label: "Fotky" }}>
            <HowItWorks />
          </SnapSection>
          <SnapSection contentsOnDesktop arrow={{ href: "#objednavka", label: "Poptávka" }}>
            <Gallery />
          </SnapSection>
          <SnapSection contentsOnDesktop snap={false}>
            <WhyUs />
          </SnapSection>
        </div>
      </section>

      <section className="py-10 sm:py-20 px-4 bg-[#3EC1D3]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <SnapSection contentsOnDesktop arrow={{ href: "#kontakt", label: "Kontakt" }}>
            <InquiryForm />
          </SnapSection>
          <SnapSection contentsOnDesktop arrow={{ href: "#", label: "Zpět nahoru", direction: "up" }}>
            <Contact contact={content.contact} />
          </SnapSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
