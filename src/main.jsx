import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path:'/addCoffee',
    element:<AddCoffee></AddCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);