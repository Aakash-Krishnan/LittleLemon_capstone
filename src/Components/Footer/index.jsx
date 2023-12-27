import React from "react";
import restaurant from "../../assets/restaurant.jpg";
import styled from "styled-components";

const Datas = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
      {props.data.map((item) => (
        <Links key={item}>{item}</Links>
      ))}
    </div>
  );
};

const Footer = () => {
  const doormatNavigation = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];
  const contact = ["Adress", "phone number", "email"];
  const socialMedia = ["Facebook", "Instagram", "Twitter", "Youtube"];
  return (
    <WholeContainer>
      <div
        className="app__about-image-box img-box-1"
        style={{
          backgroundImage: `url(${restaurant})`,
          margin: "auto",
        }}
      />
      <DataContainer>
        <Datas title="doormat Navigation" data={doormatNavigation} />
        <Datas title="contact" data={contact} />
        <Datas title="social Media" data={socialMedia} />
      </DataContainer>
    </WholeContainer>
  );
};

export default Footer;

export const WholeContainer = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  display: flex;
  justify-content: center;
  /* margin-top: 10px; */
  padding-top: 120px;
  padding-bottom: 80px;
  background-color: #edefee;
  gap: 60px;
`;

export const DataContainer = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  display: flex;
  gap: 60px;
`;

export const Title = styled.h3`
  font-size: 28px;
  color: #495e57;
`;

export const Links = styled.p`
  font-size: 18px;
  margin: 10px 0px 0px 0px;
  color: #333333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
