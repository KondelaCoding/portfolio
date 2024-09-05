import "./About.css";
import { ArrowRight, ArrowDownRight, ArrowDownLeft } from "react-feather";
import { useState, useEffect } from "react";

const data = [
  {
    title: "bio",
    content:
      "A passionate Frontend Developer and Visual Designer with a keen eye for aesthetics and a love for creating intuitive, user-friendly interfaces. With expertise in HTML, CSS, JavaScript, and popular frameworks like React, I bring designs to life with clean, efficient code. My background in visual design enhances my ability to craft engaging digital experiences that are not only functional but also visually appealing. I am dedicated to staying updated with the latest trends and technologies in both frontend development and design, constantly striving to create seamless and beautiful user experiences.",
  },
  {
    title: "career",
    content:
      "I have over 5 years of experience in frontend development and visual design. I have worked on a wide range of projects, from small business websites to large-scale web applications. I have experience working with clients from various industries, including e-commerce, healthcare, and education. I am proficient in HTML, CSS, JavaScript, and popular frontend frameworks like React, Angular, and Vue. I am also skilled in design tools like Adobe Photoshop, Illustrator, and XD.",
  },
  {
    title: "personal life",
    content:
      "Outside of work, I enjoy spending time with my family and friends. I am an avid reader and love exploring new books and authors. I am also passionate about travel and enjoy visiting new places and experiencing different cultures. I am a food enthusiast and love trying new cuisines and recipes. I am a nature lover and enjoy spending time outdoors, hiking, and camping. I am a fitness enthusiast and enjoy staying active through yoga, running, and weightlifting.",
  },
  {
    title: "achievements",
    content:
      "Throughout my career, I have received several awards and accolades for my work in frontend development and visual design. I have been recognized for my creativity, innovation, and attention to detail. I have also received positive feedback from clients and colleagues for my professionalism, communication skills, and ability to meet deadlines. I am proud of the projects I have worked on and the impact they have had on users and businesses.",
  },
];

export default function About() {
  const [activeSection, setActiveSection] = useState("bio");
  const [arrowSize, setArrowSize] = useState({ size: 80, stroke: 1.8 });
  const [isTransition, setIsTransition] = useState(false);

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    console.log("change");
    setIsTransition(true);

    setTimeout(() => {
      console.log("transition-ended");
      setIsTransition(false);
    }, 1000);
  }, [activeSection]);

  useEffect(() => {
    if (window.innerWidth < 1194) {
      setArrowSize({ size: 60, stroke: 1.5 });
    } else {
      setArrowSize({ size: 80, stroke: 1.8 });
    }
  }, []);

  return (
    <div className="about">
      <div className="container">
        <div className="content">
          <div className="title">
            <h1 className={isTransition ? "animate-about" : ""}>{activeSection}</h1>
            <ArrowDownRight
              size={arrowSize.size}
              strokeWidth={arrowSize.stroke}
              strokeLinecap="flat"
              strokeLinejoin="flat"
            />
          </div>
          <p className={isTransition ? "animate-about" : ""}>
            {data.find((item) => item.title === activeSection).content}
          </p>
          <div
            className="learn-more-mobile"
            onClick={() => {
              scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ArrowDownLeft />
            <h3>learn more</h3>
          </div>
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

//TODO Delete turnary operators in ArrowRight and use .active-section .arrow instead of making another class
