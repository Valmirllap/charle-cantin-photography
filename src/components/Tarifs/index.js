import styled from "styled-components";
import ComponentTarifs from "./ComponentTarifs";

export default function Tarifs (){

  return(
    <Wrapper>
      <ContainerTitle>
        <Title>Tarifs et prestation</Title>
      </ContainerTitle>
    <ContainerMain>
        <ComponentTarifs 
          titre="« Juste moi »"
          price="130 euros"
          button="CONTACT"
          text="Séance pour une personne, en extérieur ou en studio"
          />
        <ComponentTarifs 
          titre="« Pour deux »"
          price="195 euros"
          button="CONTACT"
          text="Pour deux personnes, en extérieur ou en studio"
          />
        <ComponentTarifs 
          titre="« Famille »"
          price="220 euros"
          button="CONTACT"
          text="Pour la famille ou les amis jusqu’à 4 personnes,
          en extérieur ou en studio 30 euros en supplément par 
          personne au-delà de 4 (hormis enfant jusqu’à 2 ans)"
          />
    </ContainerMain>
    <ContainerMain>
          <ComponentTarifs 
          titre="« Il était une fois »"
          price="160 euros"
          button="CONTACT"
          text="Photo de grossesse (À votre domicile, en extérieur ou en studio)"
          />
          <ComponentTarifs 
          titre="« Mon bébé »"
          price=" 100 euros "
          button="CONTACT"
          text="Photo d’enfant jusqu’à 3 ans (photo à domicile)"
          />
          <ComponentTarifs 
          titre="« J'immortalise l'événement »"
          price="Sur devis"
          button="CONTACT"
          text="Prestation de mariage ou baptême sur devis"
          />
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
