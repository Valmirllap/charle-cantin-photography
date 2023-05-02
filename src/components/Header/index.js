import styled from "styled-components";
import Charle from "../../Images/logoCharle.png"
import {Link, useLocation} from "react-router-dom";


export default function Header() {
  const location = useLocation();
  return (
    <Wrapper>
      <Image src={Charle}/>
      <nav>
        <Link to="/">
          <MenuEl isCurrentPage={location.pathname === "/"}>Accueil</MenuEl>
        </Link>
        <Link to="/galerie">
          <MenuEl isCurrentPage={location.pathname === "/galerie"}>Galerie</MenuEl>
        </Link>
        <Link to="/tarifs">
          <MenuEl isCurrentPage={location.pathname === "/tarifs"}>Tarifs</MenuEl>
        </Link>
        <Link to="/contact">
          <MenuEl isCurrentPage={location.pathname === "/contact"}>Contact</MenuEl>
        </Link>
      </nav>
    </Wrapper>

  )
}

const Wrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 24px;
background-color: #47555E;
& a{
  text-decoration: none;
  color: #F1F6F9;
  margin-right: 16px
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
