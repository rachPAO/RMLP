import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Form from './routes/Form';
import Main from './routes/Main';
import Error from './routes/Error';
import Review from './routes/Review';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/error",
    element: <Error/>
  }, 
  { path: "/form",
element: <Form/>},
 { path: "/reviews",
element: <Review/>}
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}
