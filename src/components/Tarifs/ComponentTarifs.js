import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ComponentTarifs ({titre, price, button, text}) {
  
return(
  <Wrapper>
      <ContainerTarif>
          <Tarif>{titre}</Tarif>
          <Tarif>{price}</Tarif>
          <Link to="/contact"><Contact>{button}</Contact></Link>
          <Texte>{text}</Texte>
        </ContainerTarif>
  </Wrapper>
)
};



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`;

const ContainerTarif = styled.div`
  margin: 30px 20px;
  background-color: #9BA4B5;
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #212A3E;

  @media screen and (max-width: 998px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 576px) {
    width: 80%;
  }

`;

const Tarif = styled.h2`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 60px;
`;

const Contact = styled.button`
  font-size: 16px;
  padding: 15px;
  width: 100%;
  background-color: #394867;
  color: #F1F6F9;
  cursor: pointer;
  &:hover {
    transition: linear 0.25s;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    font-weight: 600;
  }
`;

const Texte = styled.p`
  margin-top: 20px;
  padding: 50px;
`;
