import { useState } from "react";
import "../styles/Collapse.css";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  function getArrowClass() {
    if (isOpen) {
      return "collapse-arrow open";
    }
    return "collapse-arrow";
  }

  function getContentClass() {
    if (isOpen) {
      return "collapse-content open";
    }
    return "collapse-content";
  }

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <span className="collapse-title">{props.title}</span>

        <span className={getArrowClass()}>
          ❯
        </span>
      </button>

      <div className={getContentClass()}>
        {props.children}
      </div>
    </div>
  );
}
