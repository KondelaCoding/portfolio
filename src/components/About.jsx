import "./About.css";
import { ArrowRight, ArrowDownRight, ArrowDownLeft } from "react-feather";
import { useState } from "react";

export default function About() {
  const [activeSection, setActiveSection] = useState("bio");

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="about">
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>{activeSection}</h1>
            <ArrowDownRight size={80} strokeWidth={1.8} strokeLinecap="flat" strokeLinejoin="flat" />
          </div>
          <p>
            A passionate Frontend Developer and Visual Designer with a keen eye for aesthetics and a love for creating
            intuitive, user-friendly interfaces. With expertise in HTML, CSS, JavaScript, and popular frameworks like
            React, I bring designs to life with clean, efficient code. My background in visual design enhances my
            ability to craft engaging digital experiences that are not only functional but also visually appealing. I am
            dedicated to staying updated with the latest trends and technologies in both frontend development and
            design, constantly striving to create seamless and beautiful user experiences.
          </p>
        </div>
        <div className="menu-wrapper">
          <div className="menu">
            <div
              className={`menu-fragment ${activeSection === "bio" ? "active-section" : ""}`}
              onClick={() => handleMenuClick("bio")}
            >
              <ArrowRight className={`arrow ${activeSection === "bio" ? "active-arrow" : ""}`} />
              <p>bio</p>
            </div>
            <div
              className={`menu-fragment ${activeSection === "career" ? "active-section" : ""}`}
              onClick={() => handleMenuClick("career")}
            >
              <ArrowRight className={`arrow ${activeSection === "career" ? "active-arrow" : ""}`} />
              <p>career</p>
            </div>
            <div
              className={`menu-fragment ${activeSection === "personal life" ? "active-section" : ""}`}
              onClick={() => handleMenuClick("personal life")}
            >
              <ArrowRight className={`arrow ${activeSection === "personal life" ? "active-arrow" : ""}`} />
              <p>personal life</p>
            </div>
            <div
              className={`menu-fragment ${activeSection === "achievements" ? "active-section" : ""}`}
              onClick={() => handleMenuClick("achievements")}
            >
              <ArrowRight className={`arrow ${activeSection === "achievements" ? "active-arrow" : ""}`} />
              <p>achievements</p>
            </div>
          </div>
          <div
            className="learn-more"
            onClick={() => {
              scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ArrowDownLeft />
            <h3>learn more</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
