import { useState } from "react";
import "../styles/Collapse.css";
import "../styles/About.css";

export default function Collapse({ title, children, variant }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

 
  const cls = {
    container: variant === "about" ? "collapse-about" : "collapse",
    header: variant === "about" ? "collapse-about-header" : "collapse-header",
    title: variant === "about" ? "collapse-about-title" : "collapse-title",
    arrow: variant === "about" ? `collapse-about-arrow ${isOpen ? "open" : ""}` : `collapse-arrow ${isOpen ? "open" : ""}`,
    content: variant === "about" ? `collapse-about-content ${isOpen ? "open" : ""}` : `collapse-content ${isOpen ? "open" : ""}`
  };

  return (
    <div className={cls.container}>
      <button className={cls.header} onClick={toggle} aria-expanded={isOpen}>
        <span className={cls.title}>{title}</span>
        <span className={cls.arrow}>❮</span>
      </button>
      <div className={cls.content}>{children}</div>
    </div>
  );
}

