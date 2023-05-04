import styled from "styled-components";
import Switch from '@mui/material/Switch';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer ({handleToggleTheme, isLight, label}) {
  return (
      <Wrapper>
        <Copyright>Copyright © All rights reserved.</Copyright>
        <MessageMode>Switch to {isLight ? "dark" : "light"} mode {isLight ?  "🌙" : "☀️"}
          <Switch onClick={handleToggleTheme} {...label}/>
        </MessageMode>
        <ContainerSocial>
          <InstagramIcon/>
          <FacebookIcon/>
        </ContainerSocial>
      </Wrapper>
  )
};

const Wrapper = styled.footer`
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #47555E; 
color: #F1F6F9;
`;

const MessageMode = styled.h3`
  font-size: 18px;
 
`;
const Copyright = styled.p`
  font-size: 14px;
`;
const ContainerSocial = styled.div`
  margin-right: 10px;
  padding: 15px;
`;