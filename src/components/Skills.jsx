import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Wrap = styled.aside`
  grid-area: skills;
  padding: 0.25rem;
  display:flex;
  flex-direction:column;
  gap:0.75rem;
`;

const Title = styled.h2` font-size:1rem; margin:0; `;
const Grid = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:0.5rem;
`;

const Badge = styled.span`
  background: ${p => p.bg || theme.colors.accent};
  color: #000;
  padding:0.45rem 0.6rem;
  border-radius: 999px;
  font-weight:700;
  font-size:0.85rem;
  box-shadow: 0 6px 14px rgba(0,0,0,0.04);
`;

export default function Skills(){
  const tags = ["React","Node.js","HTML/CSS","SEO","a11y","Docker","CI/CD","Testing"];
  const palette = ["#D3FECD","#FEF3C7","#E0F2FE","#FDE8F0","#FCE7D9","#E9F5DB","#FFF4E6","#E8EDF8"];

  return (
    <Wrap aria-label="Compétences colorées">
      <Title tabIndex="0">Compétences</Title>
      <Grid>
        {tags.map((t,i) => <Badge key={t} bg={palette[i % palette.length]} tabIndex="0">{t}</Badge>)}
      </Grid>
    </Wrap>
  );
}