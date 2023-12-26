import React from "react";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import Sajal from "../../../assets/Sajal.png";
import Ramsha from "../../../assets/Ramsha.png";
import Mawra from "../../../assets/Mawra.png";
import IQSF from "../../../assets/IQSF.png";
import { Title } from "./Specials";

const Testimonials = () => {
  const customers = [
    {
      name: "IQSF",
      photo: IQSF,
      review: "Review rext rext lorem ipsudolar",
    },
    {
      name: "Mawra",
      photo: Mawra,
      review: "Review rext rext lorem ipsudolar",
    },
    {
      name: "Ramsha",
      photo: Ramsha,
      review: "Review rext rext lorem ipsudolar",
    },
    {
      name: "Sajal",
      photo: Sajal,
      review: "Review rext rext lorem ipsudolar",
    },
  ];

  return (
    <WholeContainer>
      <Title>Testimonials</Title>
      <CardContainer>
        {customers.map((customer) => (
          <Card>
            <div>
              <AiFillStar
                color="#f4ce14"
                className="app__testimonials-review-stars-icon"
              />
              <AiFillStar
                color="#f4ce14"
                className="app__testimonials-review-stars-icon"
              />
              <AiFillStar
                color="#f4ce14"
                className="app__testimonials-review-stars-icon"
              />
              <AiFillStar
                color="#f4ce14"
                className="app__testimonials-review-stars-icon"
              />
              <AiFillStar
                color="#f4ce14"
                className="app__testimonials-review-stars-icon"
              />
            </div>
            <Tag>
              <FoodImg src={customer.photo} alt={customer.name} />
              <p className="foodname">{customer.name}</p>
            </Tag>
            <Description>{customer.review}</Description>
          </Card>
        ))}
      </CardContainer>
    </WholeContainer>
  );
};

export default Testimonials;

export const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 200px;
  background-color: #c5c5c5;
`;

export const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const Card = styled.div`
  /* width: 20%; */
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  padding: 10px 30px 20px 30px;
  background-color: #edefee;
  transition: 0.3s;
`;

export const FoodImg = styled.img``;

export const Tag = styled.div`
  display: flex;
  > p {
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
  }
`;

export const Description = styled.p``;

export const OrderButton = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #495e57;
  color: #edefee;
  cursor: pointer;
`;
