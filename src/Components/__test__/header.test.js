import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
it("should load my header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

  const loginButton=screen.getByRole('button',{name:"LOGIN"})
  expect(loginButton).toBeInTheDocument()
});

it("should load my header component with cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
        </Provider>
      </BrowserRouter>
    );
  
    const cartItem=screen.getByText(/Cart/)
    expect(cartItem).toBeInTheDocument()
  });

  it("should change login to logout", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton=screen.getByRole('button',{name:"LOGIN"})
    fireEvent.click(loginButton)
    
    const logoutButton=screen.getByRole('button',{name:"LOGOUT"})
    expect(logoutButton).toBeInTheDocument()
  });