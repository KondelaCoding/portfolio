import { useState } from "react";
import "./StartAnimation.css";

export default function StartAnimation() {
  const [isAnimated, setIsAnimated] = useState(false);

  setTimeout(() => {
    setIsAnimated(true);
  }, 500);

  return (
    <div className="start-animation">
      <div className={`overlay-up ${isAnimated ? "overlay-animate-up" : ""}`}></div>
      <div className={`overlay-down ${isAnimated ? "overlay-animate-down" : ""}`}></div>
      <h1 className="title default">
        Mikołaj <span className="purple">Kondela</span>
      </h1>
      <h1 className={`title ${isAnimated ? "animate-up" : ""}`}>
        Mikołaj <span className="purple">Kondela</span>
      </h1>
      <h1 className={`title ${isAnimated ? "animate-down" : ""}`}>
        Mikołaj <span className="purple">Kondela</span>
      </h1>
      <h2 className="subtitle">Frontend Developer</h2>
      <div className={`before-page ${isAnimated ? "animate-before-page" : ""}`}></div>
    </div>
  );
}
