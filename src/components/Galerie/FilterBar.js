import styled from 'styled-components';
import React, { useState } from 'react';

import Mariage from "../../Images/mariage.jpg";
import Grossesse from "../../Images/grossesse.jpg";
import Bebe from "../../Images/bebe.jpg";
import Famille from "../../Images/famille.jpg";
import Bapteme from "../../Images/bapteme.jpg";
import Couple from "../../Images/couple.jpg";
import Portrait from "../../Images/portrait.jpg"

const data = [
  { value: 'mariage', label: 'Marriage', imageSrc: Mariage },
  { value: 'pregnancy', label: 'Grossesse',imageSrc: Grossesse },
  { value: 'baby', label: 'Bébé', imageSrc: Bebe },
  { value: 'family', label: 'Famille', imageSrc: Famille },
  { value: 'baptism', label: 'Baptême', imageSrc: Bapteme },
  { value: 'couple', label: 'Couple', imageSrc: Couple },
  { value: 'portrait', label: 'Portrait', imageSrc: Portrait},
];

const FilterBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    const options = data.find((option) => option.value === selectedValue);
    setSelectedOption(options);
  };

  return (
    <Wrapper>
      <select onChange={handleSelect}>
        <option value="">All</option>
        {data.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption && (
        <ContainerPictures>
          <ContainerCategories>
            <Categories>{selectedOption.label}</Categories>
          </ContainerCategories>
            <Pictures src={selectedOption.imageSrc} alt={selectedOption.label} />
        </ContainerPictures>
      )}
      {!selectedOption && (
        <Wrapper>
          {data.map((option) => (
            <ContainerPictures key={option.value}>
              <ContainerCategories>
                <Categories>{option.label}</Categories>
              </ContainerCategories>
              <Pictures src={option.imageSrc} alt={option.label} />
            </ContainerPictures>
          ))}
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default FilterBar;



const Wrapper = styled.div``;

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
