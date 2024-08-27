// Add Link and Outlet for navigation
import "./Home.css";
import StartAnimation from "../components/StartAnimation";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

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
    <>
      <Navbar />
      {isAnimationLoaded && <StartAnimation />}
      <div className={`container ${isEntyAnimated ? "animate-entry" : ""}`}>
        <div className="page">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
