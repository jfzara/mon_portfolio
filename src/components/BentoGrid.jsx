import React from "react";
import styled from "styled-components";
import ContactCard from "./ContactCard";
import AboutCard from "./AboutCard";
import ProjectsCard from "./ProjectsCard";
import SkillsCard from "./SkillsCard";
import { theme } from "../theme";

/* Grid container : mobile stacked, desktop asymétrique */
const Grid = styled.section`
  display: grid;
  gap: 1rem;
  align-items: start;

  /* mobile: single column with breathing space */
  grid-template-columns: 1fr;

  @media(min-width:900px){
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
      "contact contact contact contact about about about projects projects skills skills skills";
    grid-auto-rows: min-content;
    gap: 1.25rem;
  }
`;

/* Each slot wrapper assigns grid-area to child by prop */
const Slot = styled.div`
  grid-area: ${p => p.area || "auto"};
`;

/* small helper for toggles row (mobile secondary actions) */
const Toggles = styled.div`
  display:flex;
  gap:0.5rem;
  margin-top:0.5rem;
  flex-wrap:wrap;
`;

export default function BentoGrid({ showProjects, setShowProjects, showSkills, setShowSkills }){
  return (
    <Grid role="region" aria-label="Contenu principal">
      {/* Large contact card — priorité */}
      <Slot area="contact">
        <ContactCard />
        {/* On mobile, toggles for showing secondary sections under contact for quick access */}
        <Toggles className="mobile-toggles" aria-hidden={false}>
          <button
            aria-expanded={showProjects}
            aria-controls="projects-section"
            onClick={() => setShowProjects(s => !s)}
            style={toggleBtnStyle()}
          >
            {showProjects ? "Cacher projets" : "Voir projets"}
          </button>

          <button
            aria-expanded={showSkills}
            aria-controls="skills-section"
            onClick={() => setShowSkills(s => !s)}
            style={toggleBtnStyle()}
          >
            {showSkills ? "Cacher compétences" : "Voir compétences"}
          </button>
        </Toggles>
      </Slot>

      <Slot area="about">
        <AboutCard />
      </Slot>

      {/* Projects: hidden by default via prop -> apply display none if hidden */}
      <Slot area="projects" id="projects-section" style={{ display: showProjects ? "block" : "none" }}>
        <ProjectsCard />
      </Slot>

      <Slot area="skills" id="skills-section" style={{ display: showSkills ? "block" : "none" }}>
        <SkillsCard />
      </Slot>
    </Grid>
  );
}

/* inline style for toggle buttons to keep compact (could be moved to styled-components) */
function toggleBtnStyle(){
  return {
    padding: "0.45rem 0.7rem",
    background: "transparent",
    borderRadius: "6px",
    border: "1px solid rgba(0,0,0,0.06)",
    cursor: "pointer",
    fontWeight:700
  };
}