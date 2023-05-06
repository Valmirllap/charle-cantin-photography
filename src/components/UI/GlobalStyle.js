import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  transition: linear 0.25s;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: Roboto;
}

div.accueil-bg{
  height: 150vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: #F1F6F9;
}
@media screen and (max-width: 1246px) {
  & div.accueil-bg{
    font-size: 80px;
    }
  }
@media screen and (max-width: 998px) {
  & div.accueil-bg{
    font-size: 40px;
  }
}
select {
  background-color: ${(props) => props.theme.neutral};
  display: block;
  padding: 5px;
  margin-top: 15px;
  width: 20%;
  font-size: 18px;
}

`;



export default GlobalStyle;