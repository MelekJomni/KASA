import React from "react";
import "../styles/main.css";
import logo from "../assets/LOGOF.SVG"; 

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer-logo"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}