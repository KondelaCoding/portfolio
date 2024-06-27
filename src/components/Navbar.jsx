import "./Navbar.css";
import { ArrowLeft } from "react-feather";
import { useState } from "react";
import { useLocation } from "react-router";

const Navbar = () => {
  const [isEntry, setIsEntry] = useState(false);
  const location = useLocation();

  setTimeout(() => {
    setIsEntry(true);
  }, 3500);

  return (
    <nav className={isEntry ? "visible" : ""}>
      <div>
        <div className={`back-btn ${location.pathname === "/" ? "inactive" : "active"}`}>
          <ArrowLeft className="arrow" />
          <p>back</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
