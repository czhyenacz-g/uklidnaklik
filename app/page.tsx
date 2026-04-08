import Hero from "./canvas-border/_components/Hero";
import Services from "./canvas-border/_components/Services";
import Contact from "./canvas-border/_components/Contact";
import { getContent } from "../lib/sheets";

export default async function Home() {
  const content = await getContent();

  return (
    <main>
      <Hero />
      <Services services={content.services} />
      <Contact contact={content.contact} />
    </main>
  );
}
