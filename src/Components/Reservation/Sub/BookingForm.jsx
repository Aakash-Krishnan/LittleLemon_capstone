import React, { useEffect, useState } from "react";

const BookingForm = ({ avaliableTimes, dispatch }) => {
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("00:00");
  // const [guests, setGuests] = useState(1);
  // const [occasion, setOccasion] = useState("Birthday");

  const [reservationData, setReservationData] = useState({
    date: "",
    time: avaliableTimes.times[0],
    guests: 1,
    occasion: "Birthday",
  });

  const updateData = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "date":
        setReservationData({ ...reservationData, date: value });
        break;
      case "time":
        setReservationData({ ...reservationData, time: value });
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

  useEffect(() => {
    // dispatch({ type: "UPDATE_TIMES", date: new Date(reservationData.date) });
  }, [reservationData.time]);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(reservationData);
  };

  return (
    <form
      onSubmit={submitForm}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label for="date">Choose date</label>
      <input
        required
        value={reservationData.date}
        onChange={updateData}
        type="date"
        id="date"
      />

      <label for="time">Choose time</label>
      <select
        required
        value={reservationData.time}
        onChange={updateData}
        id="time"
      >
        {avaliableTimes &&
          avaliableTimes.times.map((time) => <option>{time}</option>)}
      </select>

      <label for="guest">Number of guests</label>
      <input
        required
        value={reservationData.guests}
        onChange={updateData}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
      />

      <label for="occasion">Occasion</label>
      <select
        required
        value={reservationData.occasion}
        onChange={updateData}
        id="occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
