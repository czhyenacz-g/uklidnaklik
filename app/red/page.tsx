import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { getContent } from "../../lib/sheets";

export default async function RedPage() {
  const content = await getContent();

  return (
    <main>
      <Hero />
      <Services services={content.services} />
      <Contact contact={content.contact} />
    </main>
  );
}
