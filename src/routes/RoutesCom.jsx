import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Carts from "../pages/Carts";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PublicRoute from "./PublicRoute";

const RoutesCom = () => {
  return (
      <Routes>
        {/* Authentication Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        {/* Protected Routes */}

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carts" element={<Carts />} />
        </Route>

        {/* Error Routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
};

export default RoutesCom;
