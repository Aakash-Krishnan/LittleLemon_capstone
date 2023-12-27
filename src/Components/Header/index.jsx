import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import BlockRevealAnimation from "react-block-reveal-animation";
import { HashLink } from "react-router-hash-link";

const Hero = ({ data }) => {
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
          {data.link === "#Form" ? (
            <HashTo smooth to={data.link}>
              {data.goto}
            </HashTo>
          ) : (
            <LinkTo className="link" to={data.link}>
              {data.goto}
            </LinkTo>
          )}
        </LinkDiv>
      </LeftPart>

      <RigthPart>
        <Img src={data.image} alt="Img" />
      </RigthPart>
    </WholeHeader>
  );
};

export default Hero;

export const WholeHeader = styled.section`
  @media screen and (min-width: 600px) {
    background-color: #495e57;
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    color: white;
  }
  @media screen and (max-width: 600px) {
    background-color: #495e57;
    color: white;
    /* display: flex; */
    /* flex-direction: column; */
    margin: auto;
  }
`;

export const LeftPart = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    width: 100%;
    position: static;
  }
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
  @media screen and (max-width: 600px) {
    margin: 38px;
    text-align: center;
  }
`;

export const LinkDiv = styled.div`
  margin-top: 40px;
`;

export const Shared = css`
  padding: 12px;
  font-size: 22px;
  text-decoration: none;
  background-color: #ccb128;
  color: black;
  border-radius: 20px;
  &:hover {
    box-shadow: 10px 5px 5px #1b342c;
    cursor: pointer;
    /* color: #1b342c; */
  }
`;
export const LinkTo = styled(Link)`
  ${Shared}
`;

export const HashTo = styled(HashLink)`
  ${Shared}
  text-decoration: none;
`;

export const RigthPart = styled.div`
  @media screen and (max-width: 600px) {
    margin: 40px 40px 0px 40px;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 600px) {
    width: 350px;
    height: 500px;
    border-radius: 20px;
    position: relative;
    top: 80px;
    right: 10px;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 400px;
    /* margin: 50px auto; */
  }
`;
