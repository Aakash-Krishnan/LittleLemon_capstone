import React from "react";
import Header from "../..";
import ReservationImg from "../../../../assets/restauranfood.jpg";

const ReservationHeader = () => {
  const data = {
    title: "Reserve",
    location: "A table",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.`,
    goto: "Book a table",
    link: "#Form",
    image: ReservationImg,
  };
  return <Header data={data} />;
};

export default ReservationHeader;
