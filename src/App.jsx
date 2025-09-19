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
      <MyProjects />
      <Formation />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
