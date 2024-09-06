// Add Link and Outlet for navigation
import "./Home.css";
import StartAnimation from "../components/StartAnimation";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
  const [isEntyAnimated, setIsEntyAnimated] = useState(false);
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(true);

  setTimeout(() => {
    setIsEntyAnimated(true);
  }, 500);

  setTimeout(() => {
    document.body.style.overflowY = "auto";
    setIsAnimationLoaded(false);
  }, 4000);

  return (
    <div className="home">
      <Navbar />
      {isAnimationLoaded && <StartAnimation />}
      <div className={`container-home ${isEntyAnimated ? "animate-entry" : ""}`}>
        <div className="page">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;
