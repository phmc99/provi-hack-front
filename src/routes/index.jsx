import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import Quiz_Page from "../pages/Quiz_Page";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VolunteerPage from "../pages/Volunteer_Page/volunteer_page";
import Theme_Page from "../pages/Theme_Page";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Quiz_Page />} />
      <Route path="/be_a_volunteer" element={<VolunteerPage />} />
      <Route path="/themes" element={<Theme_Page />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
