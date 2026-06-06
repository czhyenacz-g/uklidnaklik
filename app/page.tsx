import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import InquiryForm from "./components/InquiryForm";
import GiftVoucher from "./components/GiftVoucher";
import Contact from "./components/Contact";
import { getContent } from "../lib/sheets";

export default async function Home() {
  const content = await getContent();

  return (
    <main>
      <Hero />
      <Services services={content.services} />
      <Gallery />
      <InquiryForm />
      <GiftVoucher />
      <Contact contact={content.contact} />
    </main>
  );
}
