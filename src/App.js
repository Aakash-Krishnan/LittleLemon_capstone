import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <WholeApp>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Header />
              <Main />
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
