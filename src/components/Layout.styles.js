import styled from "styled-components";

/* Grille principale : mobile-first */
export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* mobile : une seule colonne */
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: 20vw 80vw; /* bannière + contenu */
    grid-template-rows: auto 1fr auto; /* nav en haut, footer en bas */
    grid-template-areas:
      "banner nav"
      "banner main"
      "banner footer";
  }
`;

export const BannerArea = styled.aside`
  grid-area: banner;
  background-color: #edfcd1;
  height: 100vh;
  position: sticky; /* garde la bannière visible */
  top: 0;
  display: flex;
  flex-direction: column;
`;

export const NavArea = styled.header`
  grid-area: nav;
  background: #edfcd1;
  border-bottom: 1px solid #dcdcdc;
`;

export const MainArea = styled.main`
  grid-area: main;
  background-color: #f9f9f9;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  color: #1e1e1e;

  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
`;

export const FooterArea = styled.footer`
  grid-area: footer;
  background: #f5f5f5;
  border-top: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
`;