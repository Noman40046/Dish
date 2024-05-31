import React from "react";
import { Link, NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar "
        className="sidebar-container mt-16 fixed bg-white border-r top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3  overflow-y-auto   ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/dashboard">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg     hover:bg-gray-100   "
                >
                  <span class="material-symbols-outlined">dashboard</span>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Dashboard{" "}
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/clients">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg     hover:bg-gray-100   "
                >
                  <span class="material-symbols-outlined">person</span>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Metered Billing
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="payments">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg     hover:bg-gray-100   "
                >
                  <span class="material-symbols-outlined">payments</span>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Payments
                  </span>
                </a>
              </Link>
            </li>

            <li>
              <Link to="/">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg     hover:bg-gray-100   "
                >
                  <span class="material-symbols-outlined">logout</span>
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
