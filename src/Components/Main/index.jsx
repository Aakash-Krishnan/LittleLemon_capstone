import React from "react";
import styled from "styled-components";
import Specials from "./SubContents/Specials";
import Testimonials from "./SubContents/Testimonials";
import About from "./SubContents/About";

const Main = () => {
  return (
    <>
      <Specials />
      <Testimonials />
      <About />
    </>
  );
};

export default Main;
