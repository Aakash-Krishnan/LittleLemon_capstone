import React from "react";
import styled from "styled-components";
import ChefImg from "../../assets/restaurantChefB.jpg";
import ChefImg2 from "../../assets/MarioandAdrianA.jpg";
import "./About.css";

const About = () => {
  const Data = {
    Title: "Little Lemon",
    location: "Chennai",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia enim velit
        mollit.`,
    image1: ChefImg,
    image2: ChefImg2,
  };

  return (
    <WholeContainet>
      <ContentDiv>
        <Title>{Data.Title}</Title>
        <Location>{Data.location}</Location>
        <Description>{Data.description}</Description>
        <Description>{Data.description}</Description>
      </ContentDiv>
      <div className="app__about-image-holder">
        <div
          className="app__about-image-box img-box-1"
          style={{
            backgroundImage: `url(${ChefImg})`,
          }}
        />
        <div
          className="app__about-image-box img-box-2"
          style={{
            backgroundImage: `url(${ChefImg2})`,
          }}
        />
      </div>
    </WholeContainet>
  );
};

export default About;

export const WholeContainet = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  padding: 40px;
`;

export const ContentDiv = styled.div`
  width: 30%;
  margin-left: 60px;
`;

export const Title = styled.h1`
  font-size: 60px;
  margin: 0px;
  color: #f4ce14;
`;

export const Location = styled.i`
  margin: 0px;
  font-size: 20px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-weight: 400;
  color: grey;
  line-height: 1.3rem;
  font-size: 18px;
`;
