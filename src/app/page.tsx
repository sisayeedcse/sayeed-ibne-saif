import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import EducationCerts from "@/components/sections/EducationCerts";
import CertificateGallery from "@/components/sections/CertificateGallery";
import Activities from "@/components/sections/Activities";

/**
 * Single-page portfolio.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <EducationCerts />
        <Experience />
        <Projects />
        <Skills />
        <Activities />
        <CertificateGallery />
      </main>
      <Footer />
    </>
  );
}
