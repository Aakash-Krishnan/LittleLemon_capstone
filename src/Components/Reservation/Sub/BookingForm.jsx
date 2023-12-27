import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const BookingForm = ({
  avaliableTimes,
  dispatch,
  submitForm,
  reservationData,
  updateData,
}) => {
  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(reservationData.date) });
  }, [reservationData.date]);

  return (
    <Form
      id="Form"
      onSubmit={submitForm}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <Label htmlFor="res-date">Choose date</Label>
      <Input
        required
        value={reservationData.date}
        onChange={updateData}
        type="date"
        id="res-date"
        data-testid="res-date"
      />

      <Label htmlFor="time">Choose time</Label>
      <Select
        required
        value={reservationData.times}
        onChange={updateData}
        id="time"
        data-testid="time-input"
      >
        {avaliableTimes.times.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </Select>

      <Label htmlFor="guest">Number of guests</Label>
      <GuestsDiv>
        <div className="Operator" id="decrement" onClick={updateData}>
          -
        </div>

        <Input
          className="numberInput"
          required
          value={reservationData.guests}
          onChange={updateData}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          data-testid="guests-input"
        />
        <div className="Operator" id="increment" onClick={updateData}>
          +
        </div>
      </GuestsDiv>
      <Label htmlFor="occasion">Occasion</Label>
      <Select
        required
        value={reservationData.occasion}
        onChange={updateData}
        id="occasion"
        data-testid="occasion-input"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </Select>

      <SubmitButton type="submit" value="Make Your reservation" />
    </Form>
  );
};

export default BookingForm;

export const OnTouch = css`
  &:hover {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 20px auto;
    padding: 10px;
    min-width: 90%;
  }
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-width: 50%;
  background-color: #ee9972;
  padding: 2rem 0rem 2rem 0rem;
  border-radius: 20px;
  margin-top: 6rem;
`;

export const Label = styled.label`
  font-size: 28px;
  font-weight: 500;
  width: 250px;
  margin-top: 12px;
`;

export const GuestsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  > .Operator {
    ${OnTouch}

    font-size: 40px;
    border-radius: 50%;
    padding: 14px;
    height: 20px;
    display: flex;
    align-items: center;
    background-color: #495e57;
    color: #edefee;
    &:hover {
      color: #495e57;
      background-color: #f4ce14;
    }
  }
`;

export const Shared = css`
  min-height: 25px;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-size: 20px;
  gap: 2px;
  font-weight: 500;
  &:hover {
    background-color: #fbdabb;
    color: #333333;
  }
`;

export const Input = styled.input`
  ${Shared}
  ${OnTouch}

  text-align: center;
`;

export const Select = styled.select`
  ${Shared}
  ${OnTouch}

  -webkit-appearance: none;
  -moz-appearance: none;
  text-align: center;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 10px;
  border: 1px solid #dfdfdf;
`;

export const SubmitButton = styled.input`
  ${Shared}
  background-color: #495e57;
  color: #edefee;
  &:hover {
    color: #495e57;
    background-color: #f4ce14;
  }
`;
