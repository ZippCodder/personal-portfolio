//main application container

import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "../../styles/styles.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";

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
  <Header />
  <RouterProvider router={router} />
  <Footer />
  </React.Fragment>
);
}
