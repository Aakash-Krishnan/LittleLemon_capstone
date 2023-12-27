import React from "react";
import styled from "styled-components";
import HomeHeader from "../../Components/Header/SubContent/HomeHeader";
import Main from "../../Components/Main";

const HomePage = () => {
  return (
    <Container>
      <HomeHeader />
      <Main />
    </Container>
  );
};

export default HomePage;
export const WholeApp = styled.div``;

export const Container = styled.div``;
