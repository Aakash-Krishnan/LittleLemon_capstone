import React from "react";
import styled from "styled-components";
import ReservationHeader from "../../Components/Header/SubContent/ReservationHeader.jsx";
import Reservation from "../../Components/Reservation/index.jsx";

const ReservationPage = () => {
  return (
    <Container>
      <ReservationHeader />
      <Reservation />
    </Container>
  );
};

export default ReservationPage;

export const WholeApp = styled.div``;

export const Container = styled.div``;
