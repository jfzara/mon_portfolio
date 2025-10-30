import "./App.css"
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
 font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #c23d3d; /* gris clair doux pour le contenu */
  color: #1E1E1E; /* texte anthracite */
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  )
}

export default App;