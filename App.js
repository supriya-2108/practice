// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello World"
// );
// console.log(heading)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "child" }, "Hi Supriya"),
    React.createElement("h2", { id: "child-2" }, "Hi Supriya!!!"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
