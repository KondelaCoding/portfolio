import "./Skills.css";
import { Code, Figma, User, ArrowUpLeft } from "react-feather";

export default function Skills() {
  const cards = [
    {
      icon: "code",
      title: "Frontend Development",
      description:
        "I specialize in building responsive, user-friendly interfaces with HTML, CSS, and JavaScript. I have experience working with popular frontend frameworks like React, Angular, and Vue.",
    },
    {
      icon: "design",
      title: "Visual Design",
      description:
        "I have a background in visual design, which allows me to create engaging digital experiences that are both functional and visually appealing. I am proficient in design tools like Adobe Photoshop, Illustrator, and XD.",
    },
    {
      icon: "ui-ux",
      title: "UI/UX Design",
      description:
        "I am passionate about creating seamless and beautiful user experiences. I have a keen eye for aesthetics and a love for crafting intuitive interfaces that enhance user engagement and satisfaction.",
    },
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case "code":
        return <Code />;
      case "design":
        return <Figma />;
      case "ui-ux":
        return <User />;
      default:
        return null;
    }
  };

  return (
    <div className="skills">
      <div className="container">
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className="card">
              {getIcon(card.icon)}
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <div className="hover-more">
                <ArrowUpLeft strokeWidth={1.5} />
                <p>hover for more</p>
              </div>
              <div className="read-more"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
