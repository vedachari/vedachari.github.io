import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Contact from "./pages/Contact";
import Page from "./components/Page";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Interests from "./pages/Interests";
import "./App.css";

function App() {
  return (
      <Page>
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id = "education">
          <Education/>
        </section>
        <section id = "interests">
          <Interests/>
        </section>
        <section id = "skills">
          <Skills/>
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Page>
  );
}

export default App;
