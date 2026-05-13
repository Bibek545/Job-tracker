import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SideBar from "./SideBar.jsx";

const UserLayout = () => {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <Header />
        <div className="d-flex justify-content-center vh-100" >
          <div className="sidebar fw-bold text-white">
            <SideBar />
          </div>
          <main className="flex-grow-1 p-5 text-center">
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default UserLayout;
