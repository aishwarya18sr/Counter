import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Counter from "..";

describe("Counter", () => {
  it("should display 0 when renders for the first time", () => {
    const { queryByText } = render(<Counter />);
    expect(queryByText(0)).toBeTruthy();
  });
  it("should increase the counter value by 1 when increment button is clicked", () => {
    const { queryByText } = render(<Counter />);
    const incrementButton = queryByText("+");
    expect(queryByText(1)).toBeFalsy();
    fireEvent.click(incrementButton);
    expect(queryByText(1)).toBeTruthy();
  });
  it("should decrease the counter value by 1 when decrement button is clicked and counter value is greater than 0", () => {
    const { queryByText } = render(<Counter />);
    const incrementButton = queryByText("+");
    fireEvent.click(incrementButton);
    const decrementButton = queryByText("-");
    expect(queryByText(0)).toBeFalsy();
    fireEvent.click(decrementButton);
    expect(queryByText(0)).toBeTruthy();
  });
  it("should have counter value as 0 when decrement button is clicked and the counter value is already 0", () => {
    const { queryByText } = render(<Counter />);
    const decrementButton = queryByText("-");
    fireEvent.click(decrementButton);
    expect(queryByText(0)).toBeTruthy();
  });
  it("should render correctly", () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
