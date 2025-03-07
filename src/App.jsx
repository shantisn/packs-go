import React from 'react';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Booking from './pages/Booking';
import Pages from './pages/Pages';
import Blogs from './pages/Blogs'
import Features from './pages/Features'
import Thailand from './pages/Thailand';
import Italy from './pages/Italy';
import Mexico from './pages/Mexico';
import Korea from './pages/Korea';
import Vietnam from './pages/Vietnam';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

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
    <Route
      path="/thailand"
      element={<Thailand />}>
    </Route>
    <Route
      path="/Italy"
      element={<Italy />}>
    </Route>
    <Route
      path="Mexico"
      element={<Mexico/>}>
    </Route>
    <Route
      path="Korea"
      element={<Korea/>}>
    </Route>
    <Route
      path="/vietnam"
      element={<Vietnam/>}>
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
