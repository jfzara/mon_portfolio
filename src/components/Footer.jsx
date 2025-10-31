import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Wrap = styled.footer`
  grid-area: footer;
  padding: 1rem ${theme.spacing.page};
  text-align:center;
  color: ${theme.colors.muted};
  font-size:0.9rem;
`;

export default function Footer(){
  return (
    <Wrap aria-label="Pied de page">
      © 2025 Jean Fabrice ZARA — Développeur React & Node.js • Montréal
    </Wrap>
  );
}