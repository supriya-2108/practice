import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import RES_LIST from "../mocks/ResListMock.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_LIST);
    },
  });
});

it("should search list for pizza input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const button = screen.getByRole("button", { name: "Search" });
  const input = screen.getByTestId("searchInput");
  fireEvent.change(input, { target: { value: "pizza" } });
  fireEvent.click(button);
  const cards = screen.getAllByTestId("rescard");
  expect(cards.length).toBe(5);
});

it("should count the exact no. of top rated restaurants", async () => {
    await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const button = screen.getByTestId('ratedButton')
  console.log(button)
  fireEvent.click(button);
  const cards = screen.getAllByTestId("rescard");
  expect(cards.length).toBe(20);
});
