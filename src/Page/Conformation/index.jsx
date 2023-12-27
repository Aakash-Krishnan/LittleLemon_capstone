import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BlockRevealAnimation from "react-block-reveal-animation";

const ConformationPage = () => {
  const { state } = useLocation();
  return (
    <WholeDiv>
      <div>
        <BlockRevealAnimation color="#edefee">
          <PageName>Booking Conformation</PageName>
        </BlockRevealAnimation>
      </div>
      <WholeCard>
        <Card>
          <Title>
            <h1>Thank you for registering</h1>
            <h3>Your reservation has been confirmed</h3>
          </Title>
          <Details>
            <h3>Your booking details</h3>

            <p>
              <span>Date:</span> {state.date}
            </p>
            <p>
              <span>Time:</span> {state.times} PM
            </p>
            <p>
              <span>Occasion:</span> {state.occasion}
            </p>
            <p>
              <span>Table for:</span> {state.guests}
            </p>
          </Details>
        </Card>
        <LinkTo to={"/reservation"}>Book another table</LinkTo>
      </WholeCard>
    </WholeDiv>
  );
};

export default ConformationPage;

export const WholeDiv = styled.div`
  @media screen and (max-width: 600px) {
    text-align: center;
  }
  background-color: #495e57;
`;

export const PageName = styled.h1`
  margin: 0px;
  padding: 20px;
  margin-bottom: 20px;
  color: #f4ce14;
  font-weight: bolder;
  font-size: 45px;
`;

export const WholeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #333333;
  padding: 20px;
  > h1 {
    color: #edefee;
    font-size: 46px;
  }
`;

export const Card = styled.div`
  background-color: #edefee;
  padding: 20px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #495e57;
`;

export const Title = styled.div`
  color: #edefee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    margin-bottom: 0px;
    font-size: 40px;
  }
  > h3 {
    font-size: 24px;
  }
`;

export const Details = styled.div`
  background-color: #ee9972;
  padding: 20px;
  width: 100%;
  position: relative;
  top: 20px;
  border-radius: 0px 0px 20px 20px;
  margin-top: 10px;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h3 {
    color: #333333;
    background-color: #edefee;
    padding: 20px;
    border-radius: 20px;
  }
  > p > span {
    font-weight: 700;
  }
`;

export const LinkTo = styled(Link)`
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  text-align: center;
  text-decoration: none;
  margin: 20px;
  min-height: 40px;
  width: 30%;
  font-size: 30px;
  padding: 16px;
  border: none;
  border-radius: 20px;
  background-color: #495e57;
  color: #f4ce14;
  &:hover {
    background-color: #f4ce14;
    color: #495e57;
  }
`;
