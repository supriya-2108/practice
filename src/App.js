// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello World"
// );
// console.log(heading)
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenuPage from "./Components/RestaurantMenuPage";
import UserContext from "./utils/context";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";
import appStore from "./utils/appStore";
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "parent" }, [
//     React.createElement("h1", { id: "child" }, "Hi Supriya"),
//     React.createElement("h2", { id: "child-2" }, "Hi Supriya!!!"),
//   ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const JsxHeading = function () {
//   return <h1>Heeloo</h1>;
// };
// We can create component like this but this is a old way of creating function
// console.log(jsxHeading);

// const number=(
//     <h1>123</h1>
// )
// const elem=<span>react</span>
// const Heading = () => (
//   <div>
//     <JsxHeading />
//     {JsxHeading}
//     <h1 id="name">Heelo supriya</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading />);
// this is how we render a normal functional component in react as babel understands this

const About = lazy(() => import("./Components/About"));
const AppLayout = () => {
  const [name, setName] = useState();
  useEffect(() => {
    setName("Supriya")
  },[]);
  return (
    <Provider store={appStore}>
     {/* <UserContext.Provider value={{ loggedInUser: name ,setName }}> */}
      <div className="app">
        <Header />
        <Outlet />
      </div>
    {/* </UserContext.Provider> */}
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
