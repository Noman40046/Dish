import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {


  return (
    <div className="main-sidear">
      <div className="app-body-navigation  ps-8">
        <nav className="navigation">
          <a href="#" className="nav-menu">
            <NavLink className={({ isActive }) => `${isActive ? "text-[#6777EF]" : "text-black"}`} to="/">
              Dashboard
            </NavLink>
          </a>

          <a href="#">
            <NavLink className={({ isActive }) => `${isActive ? "text-[#6777EF]" : "text-black"}`} to="/clients">
              Clients
            </NavLink>
          </a>
          <a href="#">
            <NavLink className={({ isActive }) => `${isActive ? "text-[#6777EF]" : "text-black"}`} to="/paybill">
              PayBill
            </NavLink>
          </a>
          <a href="#">
            <NavLink className={({ isActive }) => `${isActive ? "text-[#6777EF]" : "text-black"}`} to="/userlogin">
              userlogin
            </NavLink>
          </a>


          <a href="#">
            <NavLink className={({ isActive }) => `${isActive ? "text-[#6777EF]" : "text-black"}`} to="/payments">
              All Payments
            </NavLink>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
