import styled from "styled-components";
import Mariage from "../../Images/mariage.jpg";
import Grossesse from "../../Images/grossesse.jpg";
import Bebe from "../../Images/bebe.jpg";
import Famille from "../../Images/famille.jpg";
import Bapteme from "../../Images/bapteme.jpg";
import Couple from "../../Images/couple.jpg";
import Portrait from "../../Images/portrait.jpg"


export default function Galerie (){
  return(
    <Wrapper>
      <ContainerTitle>
        <Title>Galerie</Title>
      </ContainerTitle>
      <ContainerInput>
        <Label for="picture-select">Filtrer catégories:</Label>
        <Input name="pictures" id="picture-select">
          <option value="">ALL</option>
          <option value="mariage">Marriage</option>
          <option value="pregnancy">Grossesse</option>
          <option value="baby">Bébé</option>
          <option value="familly">Famille</option>
          <option value="baptism">Baptême</option>
          <option value="couple">Couple</option>
          <option value="portrait">Portrait</option>
        </Input>
      </ContainerInput>

        <ContainerPictures>
          <ContainerCategories>
            <Categories>Marriage</Categories>
          </ContainerCategories>
          <Pictures src={Mariage} alt="mariage"></Pictures>
        </ContainerPictures>

        <ContainerPictures>
          <ContainerCategories>
            <Categories>Grossesse</Categories>
          </ContainerCategories>
          <Pictures src={Grossesse} alt="grossesse"></Pictures>
        </ContainerPictures>

        <ContainerPictures>
          <ContainerCategories>
            <Categories>Bébé</Categories>
          </ContainerCategories>
          <Pictures src={Bebe} alt="bebe"></Pictures>
        </ContainerPictures>

        <ContainerPictures>
          <ContainerCategories>
            <Categories>Famille</Categories>
          </ContainerCategories>
          <Pictures src={Famille} alt="famille"></Pictures>
        </ContainerPictures>

        <ContainerPictures>
          <ContainerCategories>
            <Categories>Baptême</Categories>
          </ContainerCategories>
          <Pictures src={Bapteme} alt="bapteme"></Pictures>
        </ContainerPictures>

        <ContainerPictures>
          <ContainerCategories>
            <Categories>Couple</Categories>
          </ContainerCategories>
          <Pictures src={Couple} alt="couple"></Pictures>
        </ContainerPictures>

        <ContainerPictures>
          <ContainerCategories>
            <Categories>Portrait</Categories>
          </ContainerCategories>
          <Pictures src={Portrait} alt="portrait"></Pictures>
        </ContainerPictures>

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
`;

const Label = styled.label`
  text-decoration: underline;
`;

const Input = styled.select`
  margin-top: 10px;
  width: 250px;
  display: block;
`;

const ContainerPictures = styled.div`
  margin-top: 60px;
  margin-bottom: 70px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

const Pictures = styled.img`
  width: 80%;
`;

const ContainerCategories = styled.div`
  width: 80%;
`;

const Categories = styled.h3`
margin-bottom: 10px;
font-size: 20px;
font-weight: 600;
`;