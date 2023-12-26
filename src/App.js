import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import HomeHeader from "./Components/Header/SubContent/HomeHeader/index.jsx";
import ReservationHeader from "./Components/Header/SubContent/ReservationHeader.jsx/index.jsx";
import Reservation from "./Components/Reservation/index.jsx";
import ConformationPage from "./Page/Conformation/index.jsx";

const App = () => {
  return (
    <WholeApp>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <HomeHeader />
              <Main />
            </Container>
          }
        />
        <Route
          path="/reservation"
          element={
            <Container>
              <ReservationHeader />
              <Reservation />
            </Container>
          }
        />
        <Route
          path="/conformation"
          element={
            <Container>
              <ConformationPage />
            </Container>
          }
        />
      </Routes>
      <Footer />
    </WholeApp>
  );
};

export default App;

export const WholeApp = styled.div``;

export const Container = styled.div``;
