
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background: #1E1E1E;
    color: #E7E5E4;
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