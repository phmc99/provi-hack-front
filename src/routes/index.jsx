import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VolunteerPage from "../pages/Volunteer_Page/volunteer_page";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/be_a_volunteer" element={<VolunteerPage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
