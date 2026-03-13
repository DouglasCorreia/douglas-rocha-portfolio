import About from "@/sections/About";
import Cases from "@/sections/Cases";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Cases />
      <Skills />
      <Contact />
    </main>
  );
}
