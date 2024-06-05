// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar "
        className="sidebar-container fixed bg-[#FBFBFB] border-r top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
         <div className="logo flex gap-2 px-4 py-[16.4px]">
            <img className="w-8" src="../../public/logo.png" alt="" />
            <h2 className="font-bold">Digital Dish</h2>
          </div>
        <div className="h-full px-3  overflow-y-auto  border-t pt-6 ">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                className="flex items-center p-2 text-gray-900 rounded-lg"
                to="/dashboard"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center p-2 text-gray-900 rounded-lg"
                to="bills"
              >
                <span className="material-symbols-outlined">person</span>
                <span className="flex-1 ms-3 whitespace-nowrap">Billing</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center p-2 text-gray-900 rounded-lg"
                to="payments"
              >
                <span className="material-symbols-outlined">payments</span>
                <span className="flex-1 ms-3 whitespace-nowrap">Payments</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center p-2 text-gray-900 rounded-lg"
                to="messege"
                activeClassName="active-link"
              >
                <span className="material-symbols-outlined">chat</span>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Send Messege
                </span>
              </NavLink>
            </li>

            <li>
              <Link to="/">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg    hover:bg-gray-100   "
                >
                  <span className="material-symbols-outlined">logout</span>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sign Out
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
