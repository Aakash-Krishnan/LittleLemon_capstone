import React, { useReducer, useState } from "react";
import BookingForm from "./Sub/BookingForm";
import { updateTimes, initializeTimes, submitAPI } from "./helper";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Reservation = () => {
  const navigate = useNavigate();
  const [avaliableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const [reservationData, setReservationData] = useState({
    date: new Date().toLocaleDateString("en-CA"),
    times: avaliableTimes.times[0],
    guests: 1,
    occasion: "Birthday",
  });

  const updateData = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "increment":
        if (reservationData.guests < 10) {
          setReservationData({
            ...reservationData,
            guests: reservationData.guests + 1,
          });
        }
        break;
      case "decrement":
        if (reservationData.guests > 1) {
          setReservationData({
            ...reservationData,
            guests: reservationData.guests - 1,
          });
        }
        break;
      case "res-date":
        setReservationData({ ...reservationData, date: value });
        break;
      case "time":
        setReservationData({ ...reservationData, times: value });
        break;
      case "guests":
        setReservationData({ ...reservationData, guests: value });
        break;
      case "occasion":
        setReservationData({ ...reservationData, occasion: value });
        break;
      default:
        console.log(reservationData);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const validate = submitAPI(reservationData);
    if (validate) {
      localStorage.setItem("Bookings", JSON.stringify(reservationData));
      navigate("/conformation", { state: reservationData });
    } else {
      alert("Please enter a valid reservation");
    }
  };

  return (
    <Container>
      <h1>Book a table</h1>
      <BookingForm
        avaliableTimes={avaliableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
        reservationData={reservationData}
        updateData={updateData}
      />
    </Container>
  );
};

export default Reservation;

export const Container = styled.div`
  padding-top: 6rem;
  padding-bottom: 8rem;
  display: flex;
  width: 100%;
  background-color: #333333;
  > h1 {
    color: #edefee;
    text-decoration: underline;
    font-size: 40px;
    margin-left: 50px;
  }
`;
