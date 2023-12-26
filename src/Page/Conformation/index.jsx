import React from "react";
import { useLocation } from "react-router-dom";

const ConformationPage = () => {
  const { state } = useLocation();
  console.log("Conformation data:", state);
  return <div>Booking conformed</div>;
};

export default ConformationPage;
