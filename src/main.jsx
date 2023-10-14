import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import Details from './components/Details';
import Update from './components/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path:'/addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"details/:id",
    element:<Details></Details>,
    loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:"update/:id",
    element:<Update></Update>,
    loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);