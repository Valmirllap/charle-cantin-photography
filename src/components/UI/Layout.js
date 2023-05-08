import Header from "components/Header";
import Footer from "components/Footer";


import LightTheme from "./theme/light.json"
import DarkTheme from "./theme/dark.json"

import styled, {ThemeProvider} from "styled-components";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";

export default function Layout ({children}) {
const [isLight, setIsLight] = useState(true);
function handleToogleTheme() {
  setIsLight(!isLight)
}
  return(
    <ThemeProvider theme={isLight? LightTheme : DarkTheme}>
      <Wrapper>
        <GlobalStyle/>
        <Header/>
        <Main >
          {children}
        </Main>
        <Footer isLight={isLight} handleToggleTheme={handleToogleTheme}/>
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div``;

const Main = styled.div`
  min-height: calc(100vh - 160px);
  width: 100%;
  max-width: 1468px;
  border: solid 1px;
  margin: auto;
  display: flex;
  `;
