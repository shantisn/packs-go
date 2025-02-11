import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Tours from './pages/Tours';
import Booking from './pages/Booking';
import Pages from './pages/Pages';
import Blogs from './pages/Blogs'
import Features from './pages/Features'
const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<Home />}>
      
    </Route>
    <Route
      path="/tours"
      element={<Tours />}> 
    </Route>

    <Route
      path="/booking"
      element={<Booking />}>
    </Route>
    <Route
      path="/pages"
      element={<Pages />}>
    </Route>
    <Route
      path="/features"
      element={<Features />}>
    </Route>
    <Route
      path="/blogs"
      element={<Blogs />}>
    </Route>
   </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
