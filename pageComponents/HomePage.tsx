import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact from "@/sections/Contact";
import Contributions from "@/sections/Contributions";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Testimonial from "@/sections/Testimonial";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <Contributions />
        <Projects />
        <Skills />
        <Experience />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
