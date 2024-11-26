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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <MainHome/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
