import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <a href="#main-content" className="skip-link">Passer au contenu principal</a>
      <nav aria-label="Navigation principale" className="navbar-nav">
        <ul>
          <li><a href="#profil">Profil</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://github.com/jfzara" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/jfzara-developpeur-react-node-montreal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </nav>
    </header>
  );
}