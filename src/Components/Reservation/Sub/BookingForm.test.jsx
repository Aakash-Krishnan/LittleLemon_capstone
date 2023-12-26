import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { fetchAPI, initializeTimes, updateTimes } from "../helper";

describe("BookingForm", () => {
  test("Renders labels and texts", () => {
    const avaliableTimes = {
      times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };
    render(
      <BrowserRouter basename="/">
        <BookingForm
          avaliableTimes={{
            times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
          }}
          dispatch={jest.fn((action) => action)}
          submitForm={jest.fn()}
          reservationData={{
            date: new Date().toLocaleDateString("en-CA"),
            times: avaliableTimes.times[0],
            guests: 1,
            occasion: "Birthday",
          }}
          updateData={jest.fn()}
        />
      </BrowserRouter>
    );
    const chooseDateLabel = screen.getByText("Choose date");
    expect(chooseDateLabel).toBeInTheDocument();
    const chooseDateField = screen.getByTestId("res-date");
    expect(chooseDateField).toBeInTheDocument();

    const chooseTimeLabel = screen.getByText("Choose time");
    expect(chooseTimeLabel).toBeInTheDocument();
    const chooseTimeField = screen.getByTestId("time-input");
    expect(chooseTimeField).toBeInTheDocument();

    const chooseGuestsLabel = screen.getByText("Number of guests");
    expect(chooseGuestsLabel).toBeInTheDocument();
    const chooseGuestsField = screen.getByTestId("guests-input");
    expect(chooseGuestsField).toBeInTheDocument();

    const chooseOccasionLabel = screen.getByText("Occasion");
    expect(chooseOccasionLabel).toBeInTheDocument();
    const chooseOccasionField = screen.getByTestId("occasion-input");
    expect(chooseOccasionField).toBeInTheDocument();
  });

  test("iniTializeTimes returns the expected values", () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = { times: fetchAPI(today) };
    expect(initialState).toEqual(expectedResult);
  });

  test("UpdatedTimes returns the expected result", () => {
    const state = {
      times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };
    const action = { type: "SOME_ACTION" };
    const expectedResult = updateTimes(state, action);
    expect(state).toEqual(expectedResult);
  });

  test("Number of guests input validation", () => {
    const avaliableTimes = {
      times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };
    render(
      <BrowserRouter basename="/">
        <BookingForm
          avaliableTimes={{
            times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
          }}
          dispatch={jest.fn((action) => action)}
          submitForm={jest.fn()}
          reservationData={{
            date: new Date().toLocaleDateString("en-CA"),
            times: avaliableTimes.times[0],
            guests: 1,
            occasion: "Birthday",
          }}
          updateData={jest.fn()}
        />
      </BrowserRouter>
    );

    const chooseGuestsField = screen.getByTestId("guests-input");
    fireEvent.change(chooseGuestsField, { target: { value: "0" } });
    // expect(chooseGuestsField).toHaveValue("1");

    // fireEvent.change(chooseGuestsField, { target: { value: "5" } });
    // expect(chooseGuestsField).toHaveValue("5");
  });
});
