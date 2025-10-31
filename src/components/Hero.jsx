import React from "react";
import styled from "styled-components";
import photo from "../assets/photo-technicien.jpeg";
import { theme } from "../theme";

/* Hero occupies grid area 'hero' on desktop */
const Wrapper = styled.header`
  grid-area: hero;
  display: grid;
  gap: 1rem;
  align-items: center;
  background: linear-gradient(180deg, rgba(211,254,205,0.12), rgba(211,254,205,0.06));
  border-radius: ${theme.radius};
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);

  @media(min-width:900px){
    padding: 1.25rem;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items:center;

  @media(min-width:900px){
    grid-template-columns: 220px 1fr;
    align-items:stretch;
  }
`;

const PhotoBox = styled.div`
  width:100%;
  height:160px;
  border-radius:10px;
  overflow:hidden;
  img{ width:100%; height:100%; object-fit:cover; display:block; }
  @media(min-width:900px){ height:100%; min-height:220px; }
`;

const Content = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  justify-content:center;
`;

const Title = styled.h1`
  font-size:1.25rem;
  margin:0;
`;

const Punch = styled.p`
  margin:0;
  color:${theme.colors.muted};
  font-size:1rem;
`;

/* CTA group visible and strong */
const CTAGroup = styled.div`
  display:flex;
  gap:0.6rem;
  margin-top:0.6rem;
  flex-wrap:wrap;
`;

const Primary = styled.a`
  background: ${theme.colors.accent};
  padding:0.6rem 1rem;
  border-radius: 10px;
  font-weight:800;
  color:${theme.colors.text};
  box-shadow: 0 8px 18px rgba(211,254,205,0.3);
  &:hover, &:focus { transform: translateY(-3px); }
`;

const Secondary = styled.a`
  padding:0.55rem 0.9rem;
  border-radius: 10px;
  font-weight:700;
  color:${theme.colors.text};
  background: transparent;
  border: 1px solid rgba(0,0,0,0.06);
  &:hover, &:focus { background: rgba(0,0,0,0.03); }
`;

export default function Hero(){
  return (
    <Wrapper role="region" aria-label="Accueil - contact rapide">
      <Inner>
        <PhotoBox aria-hidden="true">
          <img src={photo} alt="Portrait Jean Fabrice ZARA" />
        </PhotoBox>

        <Content>
          <Title tabIndex="0">Transformons votre idée en site performant</Title>
          <Punch tabIndex="0">Design accessible • React & Node.js • Déploiement rapide</Punch>

          <CTAGroup>
            <Primary href="#contact" aria-label="Discuter de mon projet">Discuter mon projet</Primary>
            <Secondary href="#projects" aria-label="Voir mes projets">Voir mes travaux</Secondary>
          </CTAGroup>
        </Content>
      </Inner>
    </Wrapper>
  );
}