import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

/* Projects area placed in grid area 'projects' on desktop (via parent grid) */
const Wrap = styled.section`
  grid-area: projects;
  display: grid;
  gap: 0.75rem;
  align-content:start;
`;

/* header minimal, action-to-view */
const Head = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

const H = styled.h2` font-size:1rem; margin:0; `;
const More = styled.a` font-weight:700; color:${theme.colors.muted}; `;

/* Bento cards grid (compact and colorful) */
const Grid = styled.div`
  display:grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, 1fr);

  @media(min-width:1150px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.article`
  background: ${p => p.col || "#fff"};
  color: ${p => p.isDark ? "#fff" : "#000"};
  padding: 0.9rem;
  border-radius: ${theme.radius};
  min-height:90px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-shadow: 0 8px 18px rgba(0,0,0,0.06);
  transition: transform 0.18s;
  &:hover, &:focus-within { transform: translateY(-4px); }
  h3{ margin:0; font-size:0.95rem; }
  p{ margin:0; font-size:0.85rem; opacity:0.95; }
`;

const Action = styled.div` display:flex; gap:0.5rem; margin-top:0.5rem; `;
const Link = styled.a`
  padding:0.45rem 0.6rem;
  border-radius:8px;
  background: rgba(255,255,255,0.9);
  font-weight:700;
  text-decoration:none;
  border:1px solid rgba(0,0,0,0.06);
`;

export default function Projects(){
  const items = [
    { title:"YouChef (MERN)", desc:"Marketplace recette • CRUD • JWT", color:"#FFEDD5", dark:false, demo:"#", code:"#"},
    { title:"Livano (Vitrine)", desc:"Site SEO-first • Lighthouse >90", color:"#FEF3C7", dark:false, demo:"#", code:"#"},
    { title:"Pipeline Docker", desc:"CI/CD • Docker reproducible", color:"#DCFCE7", dark:false, demo:"#", code:"#"},
    { title:"Prototype UI", desc:"MVP interactif • tests utilisateurs", color:"#E9D5FF", dark:true, demo:"#", code:"#"}
  ];

  return (
    <Wrap aria-label="Projets colorés">
      <Head>
        <H tabIndex="0">Projets (preuves rapides)</H>
        <More href="#projects" aria-hidden="true">Voir tout</More>
      </Head>

      <Grid>
        {items.map((it, i) => (
          <Card key={i} col={it.color} isDark={it.dark} tabIndex="0" aria-labelledby={`proj-${i}-title`}>
            <div>
              <h3 id={`proj-${i}-title`}>{it.title}</h3>
              <p>{it.desc}</p>
            </div>

            <Action>
              <Link href={it.demo} target="_blank" rel="noopener noreferrer">Demo</Link>
              <Link href={it.code} target="_blank" rel="noopener noreferrer">Code</Link>
            </Action>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}