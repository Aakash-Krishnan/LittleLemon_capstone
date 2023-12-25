import React from "react";
import { HashRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const NavBar = () => {
  return (
    <WholeContainer>
      <ImgDiv>
        <img
          src="E:\AdvReact_Coursera\littlelemon_capstone\src\assets\Logo.svg"
          alt="Logo"
        />
      </ImgDiv>
      <div>
        <ListDiv>
          <LinkTo className="link" to={"/"}>
            Home
          </LinkTo>
          <LinkTo className="link" to={"/reservation"}>
            Reservation
          </LinkTo>
          <LinkTo className="link" to={"/order-online"}>
            Order Online
          </LinkTo>
          <LinkTo className="link" smooth to="/#menu">
            Menu
          </LinkTo>
          <LinkTo className="link" smooth to="/#about">
            About
          </LinkTo>
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

export const LinkTo = styled(Link, HashLink)`
  padding: 8px;
  font-size: 22px;
  text-decoration: none;
  color: #495e57;
  &:hover {
    color: #c1a207;
  }
`;
