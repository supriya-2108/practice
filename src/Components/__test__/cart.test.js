import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenuPage from "../RestaurantMenuPage";
import RES_MENU from "../mocks/ResMenu.json";
import { act } from "react-dom/test-utils";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_MENU);
    },
  });
});
it("should load restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenuPage />
          <Cart/>
        </BrowserRouter>
      </Provider>
    )
  );

  const header = screen.getByText("Bestsellers(15)");
  fireEvent.click(header);
  const button = screen.getAllByRole("button", { name: "Add Item" });
  fireEvent.click(button[0]);
  const carthead = screen.getByText("Cart- (1 Items)");
  fireEvent.click(carthead);
  
//   const cartheadtitle = screen.getByText("CART");
  expect(screen.getByText("CART")).toBeInTheDocument()
  // const list=screen.getAllByTestId("resListItems")
  // console.log(list)
  // expect(list.length).toBe(1)
});
