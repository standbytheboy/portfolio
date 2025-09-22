import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Formation from "./components/Formation";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import ScrollAnimation from "./components/ScrollAnimation";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="projects">
        <ScrollAnimation>
          <MyProjects />
        </ScrollAnimation>
      </section>
      <section id="formation">
        <ScrollAnimation>
          <Formation />
        </ScrollAnimation>
      </section>
      <section id="about-me">
        <ScrollAnimation>
          <AboutMe />
        </ScrollAnimation>
      </section>
      <section id="contact">
        <ScrollAnimation>
          <Contact />
        </ScrollAnimation>
      </section>
    </>
  );
}

export default App;