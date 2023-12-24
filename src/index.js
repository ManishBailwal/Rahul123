import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';

import Consultancy from './pages/consultancy';
import Career from './pages/career';
import Gromming from './pages/gromming'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "consultancy",
    element: <Consultancy/>,
  },
  {
    path: "gromming",
    element: <Gromming/>,
  },
  {
    path: "career",
    element: <Career/>
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

