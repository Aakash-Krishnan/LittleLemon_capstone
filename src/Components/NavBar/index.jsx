import React from "react";
import Logo from "../../assets/Logo.svg";
import { HashRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const NavBar = () => {
  return (
    <WholeContainer>
      <ImgDiv>
        <img src={Logo} alt="Logo" />
      </ImgDiv>
      <div>
        <ListDiv>
          <LinkTo className="link" to={"/"}>
            Home
          </LinkTo>
          <LinkTo className="link" to={"/reservation"}>
            Reservation
          </LinkTo>
          <HashTo className="link" smooth to="/#Menu">
            Menu
          </HashTo>
          <HashTo className="link" smooth to="/#About">
            About
          </HashTo>
        </ListDiv>
      </div>
    </WholeContainer>
  );
};

export default NavBar;

export const WholeContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 100%;
  background-color: #edefee;
  position: sticky;
  top: 0;
  z-index: 1;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const ImgDiv = styled.div``;

export const ListDiv = styled.div`
  text-decoration: none;
  color: black;
`;

export const LinkTo = styled(Link)`
  padding: 8px;
  font-size: 22px;
  text-decoration: none;
  color: #495e57;
  &:hover {
    color: #c1a207;
  }
`;

export const HashTo = styled(HashLink)`
  padding: 8px;
  font-size: 22px;
  text-decoration: none;
  color: #495e57;
  &:hover {
    color: #c1a207;
  }
`;
