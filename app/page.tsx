import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CoursesTeaser from "@/components/CoursesTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Skills />
      <Tools />
      <Experience />
      <Projects />
      <CoursesTeaser />
      <Contact />
      <Footer />
    </>
  );
}
