import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.svg";
import "../styles/main.css"

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />

      <nav className="nav">
        <NavLink to="/" end className="nav-link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-link">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}