import Hero from "./blue/_components/Hero";
import Services from "./blue/_components/Services";
import Contact from "./blue/_components/Contact";
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
