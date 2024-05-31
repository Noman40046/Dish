import React from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import Mainheader from "./Mainheader";

const Header = () => {
  return (
    <div className="sticky top-0 z-40">
     {/*  <div className="navbar  bg-[#6777EF] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link to="">sign in</Link>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">ADMIN DASHBOARD</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div> */}

      <Mainheader/>
      {/* <aside
        id="default-sidebar"
        className="fixed bg-white shadow-lg top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/dashboard">
                <a href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg     hover:bg-gray-100   ">
                  <span class="material-symbols-outlined">dashboard</span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Dashboard </span></a>
              </Link>
            </li>
            <li>
              <Link to="/clients">
                <a href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg     hover:bg-gray-100   ">
                  <span class="material-symbols-outlined">person</span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Metered Billing</span></a>
              </Link>
            </li>
            <li>
              <Link to="/">
                <a href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg     hover:bg-gray-100   ">
                  <span class="material-symbols-outlined">payments</span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Payments</span></a>
              </Link>
            </li>

            <li>
              <Link to="/">
                <a href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg     hover:bg-gray-100   ">
                  <span class="material-symbols-outlined">logout</span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Out </span></a>
              </Link>
            </li>
          </ul>
        </div>
      </aside> */}
      <Sidebar/>
    </div>
  );
};
export default Header;
