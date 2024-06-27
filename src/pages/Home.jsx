import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import StartAnimation from "../components/StartAnimation";
import { useState } from "react";

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
      </div>
      <Outlet />
    </>
  );
};

export default Home;
