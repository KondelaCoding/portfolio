import { Outlet } from "react-router-dom";
// Add Link for navigation
import "./Home.css";
import StartAnimation from "../components/StartAnimation";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Circle } from "react-feather";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(true);

  setTimeout(() => {
    setIsAnimated(true);
  }, 500);

  setTimeout(() => {
    document.body.style.overflowY = "auto";
    setIsAnimationLoaded(false);
  }, 4000);

  return (
    <>
      <Navbar />
      {isAnimationLoaded && <StartAnimation />}
      <div className={`propper-page ${isAnimated ? "animate-page" : ""}`}>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <h1>HOMEPAGE</h1>
        <Circle />
      </div>
      <Outlet />
    </>
  );
};

export default Home;
