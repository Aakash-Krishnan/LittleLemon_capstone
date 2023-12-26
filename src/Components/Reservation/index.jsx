import React, { useReducer } from "react";
import BookingForm from "./Sub/BookingForm";
import { updateTimes, initializeTimes } from "./helper";

const Reservation = () => {
  const [avaliableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  console.log("avaliableTimes", avaliableTimes.times);
  return (
    <>
      <BookingForm avaliableTimes={avaliableTimes} dispatch={dispatch} />
    </>
  );
};

export default Reservation;
