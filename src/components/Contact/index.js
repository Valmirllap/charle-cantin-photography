import styled from "styled-components";
import React from "react";
import { useForm, ValidationError } from '@formspree/react'

export default function Contact (){

  const [state, handleSubmit] = useForm("xnqywrqb");
  if(state.succeeded) {
    return <ValdiationForm className="validation">
            <TextValidationForm>Merci de nous avoir contacté!</TextValidationForm>
          </ValdiationForm>
  }

  const options = [
    {value: "mariage", label: "Marriage"},
    {value: "pregnancy", label: "Grossesse"},
    {value: "baby", label: "Bébé"},
    {value: "family", label: "Famille"},
    {value: "baptism", label: "Baptême"},
    {value: "couple", label: "Couple"},
    {value: "portrait", label: "Portrait"},
  ]
  return(
    <Wrapper>
       <ContainerTitle>
        <Title>Contact</Title>
      </ContainerTitle>
      <ContainerForm onSubmit={handleSubmit}>
        <Information>
          <TitleInfo>Charle Cantin - Photographe</TitleInfo>
          <Info>75000 Paris / France</Info>
          <Info>Tel.: +33123456789</Info>
          <Info>charlecantinphotographe@gmail.com</Info>
        </Information>
        <LabelInput htmlFor="lastname">Nom de famille</LabelInput>
        <Input type="text" name="lastname" id="lastname"/>
        <ValidationError prefix="Lastname" field="email" errors={state.errors}/>

        <LabelInput htmlFor="firstname">Prénom</LabelInput>
        <Input type="text" name="firstname" id="firstname"/>
        <ValidationError prefix="Firstname" field="firstname" errors={state.errors}/>

        <LabelInput htmlFor="email">E-mail</LabelInput>
        <Input type="email" name="email" id="email"/>
        <ValidationError prefix="Email" field="email" errors={state.errors}/>

        <LabelInput htmlFor="phone">Téléphone</LabelInput>
        <Input type="tel" name="phone" id="phone"/>
        <ValidationError prefix="Phone" field="phone" errors={state.errors}/>

        <LabelInput htmlFor="seance">Type de séance</LabelInput>
        <Select name="seance" id="seance">
          <option value=""></option>
          {options.map((option) => {
            return (
                <option key={option.value} id={option.value}>{option.label}</option>
            )
          })}
          <ValidationError prefix="Seance" field="seance" errors={state.errors}/>
        </Select>

        <LabelInput htmlFor="date">Sélectionnez une date</LabelInput>
        <Input type="date" name="date" id="date"/>
        <ValidationError prefix="Date" field="date" errors={state.errors}/>

        <LabelInput htmlFor="location">Lieu du shooting</LabelInput>
        <Input type="text" name="location" id="location"/>
        <ValidationError prefix="Location" field="location" errors={state.errors}/>

        <LabelInput htmlFor="message">Rédiger votre message ici ...</LabelInput>
        <TextArea name="message" id="message"/>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>

        <ButtonSend type="submit" disabled={state.submitting}>Envoyer</ButtonSend>
      </ContainerForm>
    </Wrapper>
  )
};

const ValdiationForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 576px){
    align-items: center;
    justify-content: center;
  }
  
`;
const TextValidationForm = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #212A3E;
  background-color: lightgreen;
  padding: 40px;
  box-shadow: 5px 8px 10px 4px;
`;

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

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px 20px;
  @media screen and (max-width: 768px) {
    align-items: center;
   }
`;

const Information = styled.div`
  padding: 20px;
  width: 40%;
  background-color: ${(props) => props.theme.form};
  @media screen and (max-width: 768px) {
    width: 60%;
   }
`;
const TitleInfo = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #212A3E;
`;

const Info = styled.p`
  margin-top: 20px;
  color: #212A3E;
`;

const LabelInput = styled.label`
margin-top: 30px;
`;

const Input = styled.input`
  border: none;
  margin-top: 10px;
  padding: 10px;
  width: 41%;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.form};
  @media screen and (max-width: 768px) {
    width: 60%;
   }
`;

const Select = styled.select`
  border: none;
  margin-top: 10px;
  padding: 10px;
  width: 42.5%;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.form};
  @media screen and (max-width: 768px) {
    width: 62%;
   }
`;

const TextArea = styled.textarea`
border: none;
margin-top: 10px;
padding: 10px;
width: 41%;
height: 100px;
color: ${(props) => props.theme.mainColor};
background-color: ${(props) => props.theme.form};
@media screen and (max-width: 768px) {
  width: 60%;
 }
`;

const ButtonSend = styled.button`
  padding: 15px;
  margin-top: 30px;
  background-color: #394867;
  color: #F1F6F9;
  width: 30%;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    transition: linear 0.15s;
    font-weight: 600;
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  @media screen and (max-width: 768px) {
    width: 250px;
   }
`;