import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage.jsx";
import FeaturePage from "../pages/home/FeaturePage.jsx";
import AboutPage from "../pages/home/AboutPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";
import UserLayout from "../components/layouts/UserLayout.jsx";
import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import AllJobsPage from "../pages/jobs/AllJobsPage.jsx";
import AddJobPage from "../pages/jobs/AddJobPage.jsx";
import ProfilePage from "../pages/users/ProfilePage.jsx";
import ProtectedRoute from "../pages/auth/ProtectedRoute.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path="" element={} ></Route> */}
        <Route index element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>

        <Route path="/features" element={<FeaturePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        {/* <Route path="/dashboard" element={<DashboardPage />}></Route> */}
      </Route>
      {/* private route */}
      <Route path="/user" element={<UserLayout />}>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="all-jobs" element={<AllJobsPage />}></Route>
        <Route path="add-job" element={<AddJobPage />}></Route>
        <Route path="profile" element={<ProfilePage />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
