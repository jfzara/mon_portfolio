import styled from "styled-components";
import { theme } from "../theme";

export const PrimaryCTA = styled.a`
  background: ${theme.colors.accent};
  color: ${theme.colors.text};
  padding: 0.6rem 1rem;
  border-radius: 10px;
  font-weight:800;
  &:hover, &:focus { transform: translateY(-2px); }
`;