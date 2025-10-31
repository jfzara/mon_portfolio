// components/ValueProps.jsx
import React from "react";
import styled from "styled-components";

/*
  Bento row of small boxes: 4 boxes on desktop, stacked on mobile.
  Justification: valeur rapide, scannable, prouve compétence sans texte long.
  SEO: each card contains short keyword-rich phrases.
*/

const Section = styled.section`
  padding: 1.25rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media(min-width: 640px){ grid-template-columns: repeat(2, 1fr); }
  @media(min-width: 1024px){ grid-template-columns: repeat(4, 1fr); }
`;

const Box = styled.div`
  background: #fff;
  border-radius: var(--radius);
  padding: 1rem;
  box-shadow: 0 6px 16px rgba(10,10,10,0.03);
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  border-left: 6px solid transparent;
  &:focus-within, &:hover { transform: translateY(-4px); border-left-color: var(--accent); }
`;

const Title = styled.h3`
  font-size:1rem;
`;

const Desc = styled.p`
  color:var(--muted);
  font-size:0.95rem;
`;

export default function ValueProps(){
  const items = [
    { t:"Code lisible & maintenable", d:"Composants React réutilisables, tests unitaires et conventions Git." },
    { t:"Performance web", d:"Optimisation SSR/CSR, lazy loading, images optimisées pour SEO." },
    { t:"Accessibilité & UX", d:"Contrastes, navigation clavier, aria attributes et bonnes pratiques." },
    { t:"Déploiement & CI/CD", d:"Pipelines, Docker, hébergement optimisé (Vercel/Render)." }
  ];

  return (
    <Section aria-label="Preuves techniques rapides">
      <Grid>
        {items.map((it, idx) => (
          <Box key={idx} tabIndex="0" aria-labelledby={`vp-${idx}-title`}>
            <Title id={`vp-${idx}-title`}>{it.t}</Title>
            <Desc>{it.d}</Desc>
          </Box>
        ))}
      </Grid>
    </Section>
  );
}