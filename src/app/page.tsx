import { Navbar } from "@/components/Navbar";
import { CursorGlow } from "@/components/CursorGlow";
import { Hero } from "@/components/Hero";
// ... (rest of imports)
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience, Education } from "@/components/Experience";
import { Contact, Footer } from "@/components/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
