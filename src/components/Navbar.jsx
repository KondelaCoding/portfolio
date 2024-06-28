import "./Navbar.css";
import { ArrowUp, RotateCw, Menu } from "react-feather";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isEntry, setIsEntry] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [section, setSection] = useState("hero");
  const [visibleSection, setVisibleSection] = useState("hero");
  const [isSectionChanged, setIsSectionChanged] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  setTimeout(() => {
    setIsEntry(true);
  }, 3500);

  const calculateSection = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 0 && scrollY < 200) {
      setSection("hero");
    } else if (scrollY >= 200 && scrollY < 300) {
      setSection("about");
    } else if (scrollY >= 300 && scrollY < 400) {
      setSection("projects");
    } else if (scrollY >= 400) {
      setSection("socials");
    } else {
      setSection("hero");
    }
  };

  // ANIMATION FOR SECTION CHANGING NAVBAR
  // useEffect(() => {
  //   console.log(section);
  //   if (!isSectionChanged) {
  //     setIsSectionChanged(true);
  //   }

  //   setTimeout(() => {
  //     setVisibleSection(section);
  //   }, 100);

  //   setTimeout(() => {
  //     setIsSectionChanged(false);
  //   }, 1000);
  // }, [section]);

  window.addEventListener("scroll", calculateSection);

  return (
    <nav className={isEntry ? "visible" : ""}>
      <div className="desktop-nav">
        <div className="nav-btn menu" onClick={openMenu}>
          <Menu className="menu-icon"></Menu>
        </div>
        <div className="sections">
          <p>Hero</p>
          <p>About</p>
          <p>Projects</p>
          <p>Socials</p>
        </div>
        <div className="section-indicator">
          <h1 className="section-name">{section}</h1>
        </div>
        <div className="buttons">
          <div
            className="nav-btn reload"
            onClick={() => {
              window.location.reload();
            }}
          >
            <RotateCw className="rotate" />
          </div>
          <div className="nav-btn up" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <ArrowUp className="arrow-up" />
          </div>
        </div>
        <div className={`section-animation ${isSectionChanged ? "section-changed" : ""}`}></div>
      </div>
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu">
          <h1>Hero</h1>
          <h1>About</h1>
          <h1>Projects</h1>
          <h1>Socials</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
