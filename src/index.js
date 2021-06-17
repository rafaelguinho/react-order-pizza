import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  registerMicroApps,
  start,
  setDefaultMountApp,
} from "qiankun";
import NavBar from "./components/NavBar";

registerMicroApps(
  [
    {
      name: "new_order", // app name registered
      entry: "//localhost:7100",
      container: "#yourContainer",
      activeRule: "/new-order",
    },
    {
      name: "orders", // app name registered
      entry: "//localhost:7200",
      container: "#yourContainer",
      activeRule: "/orders",
    },
  ],
  {
    beforeLoad: (app) => console.log("beforeLoad", app.name),
    afterUnmount: (app) => console.log("afterUnmount ", app.name),
    beforeMount: (app) => console.log("beforeMount", app.name),
  }
);

setDefaultMountApp("/orders");

start();
ReactDOM.render(
  <>
    <NavBar />
    <div id="yourContainer" />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
