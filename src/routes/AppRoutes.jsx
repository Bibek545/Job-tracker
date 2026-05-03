import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage.jsx";
import FeaturePage from "../pages/home/FeaturePage.jsx";
import AboutPage from "../pages/home/AboutPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path="" element={} ></Route> */}
        <Route index element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}>
          {" "}
        </Route>

        <Route path="/features" element={<FeaturePage />}>
          {" "}
        </Route>
        <Route path="/about" element={<AboutPage />}>
          {" "}
        </Route>
        <Route path="/login" element={<LoginPage />}>
          {" "}
        </Route>
        <Route path="/register" element={<RegisterPage />}>
          {" "}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
