import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ReservationPage from "./Page/Reservation/index.jsx";
import ConformationPage from "./Page/Conformation/index.jsx";
import HomePage from "./Page/Home/index.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/conformation" element={<ConformationPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
