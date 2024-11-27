import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Error from './Error';
import MainHome from './MainHome';
import AddCoffee from './AddCoffee';
import CoffeeDetails from './CoffeeDetails';
import UpdateCoffee from './UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <MainHome/>,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee/>,
      },
      {
        path: "/update-coffee",
        element: <UpdateCoffee/>,
      },
      {
        path: "/coffee-details",
        element: <CoffeeDetails/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
