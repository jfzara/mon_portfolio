import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background: #111111;
  color: #e7e5e4;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;

  a {
    color: #3b82f6;
    text-decoration: none;
    margin: 0 0.5rem;
    transition: color 0.2s;
  }

  a:hover {
    color: #2563eb;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <p>Jean Fabrice ZARA | Montréal | 438 529 3975 | 
        <a href="mailto:zarajeanfabrice@gmail.com">Email</a> ·
        <a href="https://github.com/jfzara" target="_blank" rel="noopener noreferrer">GitHub</a> ·
        <a href="https://www.linkedin.com/in/jfzara-developpeur-react-node-montreal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <p>&copy; 2025 Jean Fabrice ZARA</p>
    </FooterSection>
  );
}