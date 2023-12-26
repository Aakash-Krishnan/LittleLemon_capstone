import React from "react";
import styled from "styled-components";
import restaurentFood from "../../assets/restauranfood.jpg";
import { Link } from "react-router-dom";
import BlockRevealAnimation from "react-block-reveal-animation";

const Header = ({ data }) => {
  return (
    <WholeHeader>
      <LeftPart>
        <div>
          <BlockRevealAnimation color="#F4CE14">
            <Title>{data.title}</Title>
          </BlockRevealAnimation>
        </div>
        <BlockRevealAnimation color="#edefee">
          <Location>{data.location}</Location>
        </BlockRevealAnimation>
        <BlockRevealAnimation color="#edefee">
          <Description>{data.description}</Description>
        </BlockRevealAnimation>
        <LinkDiv>
          <LinkTo className="link" to={"/reservation"}>
            {data.goto}
          </LinkTo>
        </LinkDiv>
      </LeftPart>

      <RigthPart>
        <Img src={restaurentFood} alt="Img" />
      </RigthPart>
    </WholeHeader>
  );
};

export default Header;

export const WholeHeader = styled.header`
  background-color: #495e57;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  color: white;
`;

export const LeftPart = styled.div`
  margin-top: 60px;
  width: 50%;
  height: 100%;
  position: relative;
  right: 50px;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 0px;
  color: #c1a207;
`;

export const Location = styled.i`
  margin-top: 0px;
  font-size: 20px;
  font-weight: 500px;
`;

export const Description = styled.p`
  margin-top: 70px;
  font-size: 20px;
  line-height: 25px;
  width: 80%;
`;

export const LinkDiv = styled.div`
  margin-top: 40px;
`;
export const LinkTo = styled(Link)`
  padding: 12px;
  font-size: 22px;
  text-decoration: none;
  background-color: #ccb128;
  color: black;
  border-radius: 20px;
`;

export const RigthPart = styled.div``;

export const Img = styled.img`
  width: 350px;
  height: 500px;
  border-radius: 20px;
  position: relative;
  top: 80px;
  right: 10px;
`;
