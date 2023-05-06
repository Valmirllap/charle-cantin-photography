import styled from "styled-components";

import FilterBar from "../Galerie/FilterBar.js"

export default function Galerie (){
  return(
    <Wrapper>

      <ContainerTitle>
        <Title>Galerie</Title>
      </ContainerTitle>

      <ContainerInput>
        <Label for="picture-select">Filtrer catégories:</Label>
        <FilterBar/>
      </ContainerInput>

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

const ContainerInput = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 50px;
  & .select{
    margin-top: 10px;
    width: 40%;
    color: #212A3E;
  }
`;

const Label = styled.label`
  text-decoration: underline;
`;