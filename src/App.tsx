import { useTheme } from "./hooks/useTheme";
import { useSectionReveal } from "./hooks/useSectionReveal";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { CloudDive } from "./components/CloudDive";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  useSectionReveal();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <CloudDive />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
