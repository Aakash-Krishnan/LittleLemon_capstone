import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { HashRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled, { css } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <WholeContainer>
      <ImgDiv>
        <img src={Logo} alt="Logo" />
      </ImgDiv>
      <Desktop>
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
      </Desktop>
      {!sidebar ? (
        <HamButton onClick={() => setSidebar(!sidebar)} />
      ) : (
        <CloseIcon onClick={() => setSidebar(!sidebar)} />
      )}
      {sidebar && (
        <SideBar>
          <ListDiv>
            <LinkTo
              onClick={() => setSidebar(!sidebar)}
              className="link"
              to={"/"}
            >
              Home
            </LinkTo>
            <LinkTo
              onClick={() => setSidebar(!sidebar)}
              className="link"
              to={"/reservation"}
            >
              Reservation
            </LinkTo>
            <HashTo
              onClick={() => setSidebar(!sidebar)}
              className="link"
              smooth
              to="/#Menu"
            >
              Menu
            </HashTo>
            <HashTo
              onClick={() => setSidebar(!sidebar)}
              className="link"
              smooth
              to="/#About"
            >
              About
            </HashTo>
          </ListDiv>
        </SideBar>
      )}
    </WholeContainer>
  );
};

export default NavBar;

export const WholeContainer = styled.nav`
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0px;
    margin: 0px;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 1;
  }
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

export const SharedIcons = css`
  @media screen and (min-width: 600px) {
    display: none;
  }
  margin-right: 20px;
  font-size: 30px;
`;
export const CloseIcon = styled(IoIosClose)`
  ${SharedIcons}
  font-size: 40px;
`;
export const HamButton = styled(GiHamburgerMenu)`
  ${SharedIcons}
`;

export const ImgDiv = styled.div``;

export const Desktop = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const ListDiv = styled.div`
  text-decoration: none;
  color: black;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
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

export const SideBar = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
  width: 50%;
  top: 90px;
  left: 200px;
  position: fixed;
  background-color: #edefee;
`;
