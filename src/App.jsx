import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Formation from "./components/Formation";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <>
      <Header />
      <section id="projects">
        <MyProjects />
      </section>
      <section id="formation">
        <Formation />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="contato">
        <Contact />
      </section>
    </>
  );
}

export default App;
