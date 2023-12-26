import React from "react";
import styled from "styled-components";
import greekSalad from "../../../assets/greekSalad.jpg";
import Bruchetta from "../../../assets/bruchetta.svg";
import LemonDessert from "../../../assets/lemonDessert.jpg";

const Specials = () => {
  const foodsList = [
    {
      image: greekSalad,
      name: "Greek Salad",
      price: "$12.21",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      image: Bruchetta,
      name: "Bruchetta",
      price: "$19.47",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      image: LemonDessert,
      name: "Lemon Dessert",
      price: "$10.88",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <MainContainer id="Menu">
      <TopDiv>
        <Title>Specials</Title>
        <OrderMenu>online menu</OrderMenu>
      </TopDiv>
      <CardContainer>
        {foodsList.map((food) => (
          <Card>
            <FoodImg
              src={food.image}
              alt={food.name}
              width={320}
              height={200}
            />
            <Tag>
              <p className="foodname">{food.name}</p>
              <p>{food.price}</p>
            </Tag>
            <Description>{food.description}</Description>
            <OrderButton>Order</OrderButton>
          </Card>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default Specials;

export const MainContainer = styled.main`
  margin: 200px 0px 50px 0px;
  padding: 0px 40px 0px 40px;
`;

export const TopDiv = styled.div`
  padding: 0px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: bolder;
  font-size: 40px;
`;

export const OrderMenu = styled.button`
  background-color: #f4ce14;
  border: none;
  padding: 20px;
  color: black;
  font-size: 20px;
  font-weight: 700;
  border-radius: 20px;
  &:hover {
    box-shadow: 10px 5px 5px grey;
    cursor: pointer;
  }
`;

export const CardContainer = styled.div`
  padding: 50px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const Card = styled.div`
  width: 20%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  padding: 10px 30px 20px 30px;
  background-color: #fbdabb;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  /* width: 40%; */
`;

export const FoodImg = styled.img`
  /* border-radius: 20px 20px 0px 0px; */
  width: 100%;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  > p {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const Description = styled.p`
  min-height: 80px;
`;

export const OrderButton = styled.button`
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #495e57;
  color: #edefee;
  cursor: pointer;
`;
