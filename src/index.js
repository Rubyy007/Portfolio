import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { StrictMode } from 'react';
import Education from './components/education';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from './components/Project';
import Footer from './components/footer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/education",
    element:<Education/>,
  },
  {
    path:"/project",
    element:<Project/>,
  },
  {
    path:"/footer",
    element:<Footer/>,
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
);

