import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./container/App";
// import Task from "./Task/Task";
// import Task1 from "./Task/Task1";
import Task3 from "./Task/Task3";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App appTitle="Person Manager" /> */}
    {/* <div style={{ margin: "12px" }}>
      <Task />
      <div style={{ borderBottom: "7px solid", margin: "12px 0px" }}></div>
      <Task1 />
    </div> */}
    <div style={{ margin: "12px" }}>
      <Task3 />
      {/* <div style={{ borderBottom: "7px solid", margin: "12px 0px" }}></div> */}
    </div>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
