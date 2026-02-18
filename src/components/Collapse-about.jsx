import { useState } from "react";
import "../styles/About.css";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function getArrowClass() {
    if (isOpen) {
      return "collapse-about-arrow open";
    }
    return "collapse-about-arrow";
  }

  function getContentClass() {
    if (isOpen) {
      return "collapse-about-content open";
    }
    return "collapse-about-content";
  }

  return (
    <div className="collapse-about">
      <button
        className="collapse-about-header"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="collapse-about-title">{title}</span>

        <span className={getArrowClass()}>
          ❯
        </span>
      </button>

      <div className={getContentClass()}>
        {children}
      </div>
    </div>
  );
}