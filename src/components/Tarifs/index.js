import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Tarifs (){
  return(
    <Wrapper>
      <ContainerTitle>
        <Title>Tarifs et prestation</Title>
      </ContainerTitle>
    <ContainerMain>
      <ContainerTarif>
        <Tarif>« Juste moi »</Tarif>
        <Tarif>130 euros</Tarif> 
        <Link to="/contact"><Contact>CONTACT</Contact></Link>
        <Texte>Séance pour une personne, en extérieur ou en studio</Texte>
      </ContainerTarif>

      <ContainerTarif>
        <Tarif>« Pour deux »</Tarif>
        <Tarif>195 euros</Tarif> 
        <Link to="/contact"><Contact>CONTACT</Contact></Link>
        <Texte>Pour deux personnes, en extérieur ou en studio</Texte>
      </ContainerTarif>

      <ContainerTarif>
        <Tarif>« Famille »</Tarif>
        <Tarif>220 euros</Tarif> 
        <Link to="/contact"><Contact>CONTACT</Contact></Link>
        <Texte>Pour la famille ou les amis jusqu’à 4 personnes,
           en extérieur ou en studio 30 euros en supplément par 
           personne au-delà de 4 (hormis enfant jusqu’à 2 ans)</Texte>
      </ContainerTarif>
    </ContainerMain>
      
    <ContainerMain>
      <ContainerTarif>
        <Tarif>«  Il était une fois »</Tarif>
        <Tarif>160 euros</Tarif> 
        <Link to="/contact"><Contact>CONTACT</Contact></Link>
        <Texte>Photo de grossesse (À votre domicile, en extérieur ou en studio)</Texte>
      </ContainerTarif>

      <ContainerTarif>
        <Tarif>« Mon bébé »</Tarif>
        <Tarif>100 euros</Tarif> 
        <Link to="/contact"><Contact>CONTACT</Contact></Link>
        <Texte>Photo d’enfant jusqu’à 3 ans (photo à domicile)</Texte>
      </ContainerTarif>

      <ContainerTarif>
        <Tarif>« J’immortalise l’événement »</Tarif>
        <Tarif>Sur devis</Tarif> 
        <Link to="/contact"><Contact>CONTACT</Contact></Link>
        <Texte>Prestation de mariage ou baptême sur devis</Texte>
      </ContainerTarif>
    </ContainerMain>
    </Wrapper>
  )
};

const Wrapper = styled.div`
overflow-x: hidden;
`;

const ContainerTitle = styled.div`
  background-color: #394867;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 20px;
  margin-top: 15px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #F1F6F9;
`;

const ContainerMain = styled.div`
  display: flex;

  @media screen and (max-width: 998px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;


const ContainerTarif = styled.div`
  margin: 30px 20px;
  background-color: #9BA4B5;
  width: 35%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #212A3E;

  @media screen and (max-width: 998px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
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

