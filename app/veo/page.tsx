import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Contact from "./_components/Contact";
import { getContent } from "../../lib/sheets";

export default async function VeoPage() {
  const content = await getContent();

  return (
    <main>
      <Hero />
      <Services services={content.services} />
      <Contact contact={content.contact} />
    </main>
  );
}
