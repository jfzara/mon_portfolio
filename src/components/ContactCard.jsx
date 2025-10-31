import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import photo from "../assets/photo-technicien.jpeg";

const Card = styled.article`
  background: linear-gradient(180deg, rgba(211,254,205,0.08), rgba(211,254,205,0.03));
  border-radius: ${theme.radius};
  padding: 1.25rem;
  display:flex;
  gap:1rem;
  align-items:center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  transition: transform 180ms ease, filter 180ms ease;
  &:hover{ transform: translateY(-4px); filter:brightness(1.01); }
`;

const Photo = styled.div`
  width:120px; height:120px; border-radius: ${theme.radius}; overflow:hidden;
  img{ width:100%; height:100%; object-fit:cover; display:block; }
`;

const Content = styled.div`
  display:flex; flex-direction:column; gap:0.6rem; flex:1;
`;

const Headline = styled.h1`
  font-size:1.25rem; margin:0; color:${theme.colors.text};
`;

const Tagline = styled.p`
  margin:0; color:${theme.colors.muted};
`;

const Actions = styled.div`
  display:flex; gap:0.6rem; margin-top:0.5rem; flex-wrap:wrap;
`;

const Primary = styled.a`
  background: ${theme.colors.cta};
  padding:0.6rem 0.95rem;
  border-radius:6px;
  font-weight:800;
  box-shadow: 0 8px 20px rgba(255,184,76,0.14);
  &:hover{ transform: translateY(-3px); filter:brightness(1.02); }
`;

const Secondary = styled.a`
  padding:0.55rem 0.85rem;
  border-radius:6px;
  background: transparent;
  color:${theme.colors.text};
  border: 1px solid rgba(0,0,0,0.06);
  font-weight:700;
  &:hover{ background: rgba(0,0,0,0.03); }
`;

export default function ContactCard(){
  return (
    <Card role="region" aria-label="Contact - priorité">
      <Photo aria-hidden="true"><img src={photo} alt="Portrait Jean Fabrice ZARA" /></Photo>

      <Content>
        <Headline tabIndex="0">Envie de lancer un projet ?</Headline>
        <Tagline tabIndex="0">Simple, rapide — discutons de vos besoins. Réponse sous 48h.</Tagline>

        <Actions>
          <Primary href="#contact" onClick={(e)=>{ e.preventDefault(); window.location.href = "mailto:zarajeanfabrice@gmail.com"; }} aria-label="Envoyer un email">Envoyer un email</Primary>
          <Secondary href="tel:+14385293975" aria-label="Appeler">Appeler</Secondary>
          <Secondary href="https://www.linkedin.com/in/jfzara-developpeur-react-node-montreal/" target="_blank" rel="noreferrer">LinkedIn</Secondary>
        </Actions>
      </Content>
    </Card>
  );
}