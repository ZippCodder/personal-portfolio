//main application container

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "../styles/styles.css";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";

window.React = React;
window.ReactDOM = ReactDOM;

const router = createBrowserRouter([
{
 path: "/projects", 
 element: <Projects />, 
},
{
 path: "/", 
 element: <About />, 
}
]);

export default function App() {
return (
  <React.Fragment>
  <RouterProvider router={router} />
  </React.Fragment>
);
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />); 
