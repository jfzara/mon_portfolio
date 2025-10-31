import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Card = styled.article`
  background: linear-gradient(180deg, rgba(0,166,251,0.03), rgba(211,254,205,0.02));
  border-radius: ${theme.radius};
  padding:1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  transition: transform 180ms ease;
  &:hover{ transform: translateY(-3px); filter:brightness(1.01); }
`;

const Title = styled.h2` font-size:1.05rem; margin:0 0 0.5rem 0; `;
const Short = styled.p` margin:0; color:${theme.colors.muted}; `;

const Action = styled.a`
  display:inline-block;
  margin-top:0.8rem;
  padding:0.45rem 0.7rem;
  border-radius:6px;
  background: ${theme.colors.accent2};
  color:#fff;
  font-weight:700;
`;

export default function AboutCard(){
  return (
    <Card role="region" aria-label="À propos bref">
      <Title tabIndex="0">Qui suis-je ?</Title>
      <Short tabIndex="0">Je transforme des idées en sites utilitaires, simples et lisibles — proche du client et orienté résultat.</Short>
      <Action href="#about" onClick={(e)=>{ e.preventDefault(); alert("Plus d'info — section dédiée (à implémenter)"); }}>En savoir plus</Action>
    </Card>
  );
}