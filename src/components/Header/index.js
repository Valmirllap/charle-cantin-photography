import styled from "styled-components";
import Charle from "../../Images/logoCharle.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link, useLocation} from "react-router-dom";
import { useRef } from "react";


export default function Header() {
const navRef = useRef();

const showNavBar = () => {
  navRef.current.classList.toggle("responsive_nav");
}

const hideNavBar = () => {
  navRef.current.classList.remove("responsive_nav");
}

  const location = useLocation();
  return (
    <Wrapper>
      <Image src={Charle}/>
      <nav ref={navRef}>
        <Link  to="/">
          <MenuEl onClick={hideNavBar} isCurrentPage={location.pathname === "/"}>Accueil</MenuEl>
        </Link>
        <Link  to="/galerie">
          <MenuEl onClick={hideNavBar} isCurrentPage={location.pathname === "/galerie"}>Galerie</MenuEl>
        </Link>
        <Link  to="/tarifs">
          <MenuEl onClick={hideNavBar} isCurrentPage={location.pathname === "/tarifs"}>Tarifs</MenuEl>
        </Link>
        <Link  to="/contact">
          <MenuEl onClick={hideNavBar} isCurrentPage={location.pathname === "/contact"}>Contact</MenuEl>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}><CloseIcon/></button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}><MenuIcon/></button>
    </Wrapper>

  )
}

const Wrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 24px;
background-color: #47555E;
& a{
  text-decoration: none;
  color: #F1F6F9;
  margin-right: 16px
}

& .nav-btn {
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: #F1F6F9;
  display: none;
}

@media (max-width: 768px) {
  & .nav-btn {
    display: flex;
  }
  & nav{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background-color: #47555E;
    transform: translateY(-100vh); 
  }
  & .responsive_nav {
    transform: none;
  }

& nav .nav-close-btn{
  position: absolute;
  top: 2rem;
  right: 2rem;
}

}


`;

const MenuEl = styled.a`
  font-size: 18px;
  padding-bottom: 2px;
  border-bottom: solid 2px ${props => props.isCurrentPage ? "" : "transparent"};
  &:hover{
    border-bottom: solid 2px;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;
