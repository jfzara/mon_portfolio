import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background: #1e1e1e;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a, button {
    color: #e7e5e4;
    text-decoration: none;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
  }

  a:hover, button:hover {
    color: #3b82f6;
  }
`;

const SkipLink = styled.a`
  position: absolute;
  left: -999px;
  top: -999px;
  background: #3b82f6;
  color: #fff;
  padding: 0.5rem;
  z-index: 100;
  &:focus {
    left: 1rem;
    top: 1rem;
  }
`;

export default function Navbar() {
  return (
    <Header>
      <SkipLink href="#main-content">Passer au contenu principal</SkipLink>
      <div style={{ fontWeight: "bold", color: "#edfcd1" }}>JFZARA</div>
      <Nav aria-label="Navigation principale">
        <ul>
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://github.com/jfzara" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jfzara-developpeur-react-node-montreal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}