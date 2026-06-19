import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import InquiryForm from "./components/InquiryForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { getContent } from "../lib/sheets";

export default async function Home() {
  const content = await getContent();

  return (
    <main>
      <Header />
      <Hero />
      <Services services={content.services} />

      <section className="py-10 sm:py-20 px-4 bg-[#3EC1D3]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 items-stretch">
          <HowItWorks />
          <Gallery />
          <WhyUs />
        </div>
      </section>

      <section className="py-10 sm:py-20 px-4 bg-[#3EC1D3]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <InquiryForm />
          <Contact contact={content.contact} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
