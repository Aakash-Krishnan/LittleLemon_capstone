import React, { useReducer, useState } from "react";
import BookingForm from "./Sub/BookingForm";
import { updateTimes, initializeTimes, submitAPI } from "./helper";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Reservation = () => {
  const navigate = useNavigate();
  const [avaliableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [guests, setGuests] = useState(1);

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
        // console.log("HELLOOOOOOOOOOOOOO");
        // const val = reservationData.guests;
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
  // const updateGuest = (type) => {
  //   if (type === "increment") {
  //     setGuests(reservationData.guests + 1);
  //   } else {
  //     setGuests(reservationData.guests - 1);
  //   }
  // };
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
      <BookingForm
        avaliableTimes={avaliableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
        reservationData={reservationData}
        // setReservationData={setReservationData}
        updateData={updateData}
      />
    </Container>
  );
};

export default Reservation;

export const Container = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #333333;
`;
