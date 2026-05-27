import { useTheme } from "./hooks/useTheme";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Now } from "./sections/Now";
import { Work } from "./sections/Work";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Services } from "./sections/Services";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero />
        <About />
        <Now />
        <Work />
        <Experience />
        <Skills />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
