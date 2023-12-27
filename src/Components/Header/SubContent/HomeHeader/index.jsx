import React from "react";
import Hero from "../..";
import restaurentFood from "../../../../assets/restauranfood.jpg";

const HomeHeader = () => {
  const data = {
    title: "Little Lemon",
    location: "New York",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived not
only five centuries, but also the leaps into electronic typesetting,
remaining essentially unchanged.`,
    goto: "Reserve a Table",
    link: "/reservation",
    image: restaurentFood,
  };
  return <Hero data={data} />;
};

export default HomeHeader;
