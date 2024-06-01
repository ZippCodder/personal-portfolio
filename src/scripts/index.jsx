import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app.jsx";

window.React = React;

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />); 
