import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background: #2a2a2a;
  color: #e7e5e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 1rem;

  h1 {
    color: #1d213f;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  a.button {
    background: #3b82f6;
    color: #e7e5e4;
    padding: 0.75rem 1.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.2s;
  }

  a.button:hover {
    background: #2563eb;
  }

  img.profile {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #edfcd1;
    margin-bottom: 1rem;
    object-fit: cover;
  }
`;

export default function Hero() {
  return (
    <HeroSection id="hero">
      <img className="profile" src="https://via.placeholder.com/120" alt="Photo de profil Jean Fabrice ZARA"/>
      <h1>Jean Fabrice ZARA</h1>
      <h2>Développeur web React & Node.js | Montréal</h2>
      <div>
        <a href="#projets" className="button">Voir mes projets</a>
        <a href="#contact" className="button">Me contacter</a>
      </div>
    </HeroSection>
  );
}