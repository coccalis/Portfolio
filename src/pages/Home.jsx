import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import HeroSection from "../components/sections/HeroSection";
import Projects from "../components/sections/Projects";

function Home() {
  return (
    <>
      <main className="scroll-smooth bg-bg-light  dark:bg-bg-primary">
        <HeroSection />
        <hr className="mx-14 rounded-xl h-1 bg-divider-clr opacity-55" />
        <About />
        <hr className="mx-14 rounded-xl h-1 bg-divider-clr opacity-55" />
        <Projects />
        <hr />
        <Contact />
      </main>
    </>
  );
}

export default Home;
