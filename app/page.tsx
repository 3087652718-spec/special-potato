import AboutIntro from "@/components/AboutIntro";
import Contact from "@/components/Contact";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <main className="portfolio-shell">
      <Hero />
      <AboutIntro />
      <ProjectGallery />
      <Skills />
      <DesignPhilosophy />
      <Contact />
      <Footer />
    </main>
  );
}
