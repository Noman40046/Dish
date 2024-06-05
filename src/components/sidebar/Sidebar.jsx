// eslint-disable-next-line no-unused-vars
import {
  Banknote,
  Grid2X2,
  HandCoins,
  MessageCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar "
        className="sidebar-container fixed bg-[#FBFBFB] border-r top-0 left-0 z-[999] w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="logo flex gap-2 items-center px-4 py-[16.4px]">
          <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/3335/3335909.png" alt="" />
          <h2 className="font-bold">Digital Dish</h2>
        </div>
        <div className="h-full px-3  overflow-y-auto  border-t pt-6 ">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                className="flex items-center p-2 text-gray-900 rounded-lg"
                to="/dashboard"
              >
                <Grid2X2 />
                <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center p-2 text-gray-900 rounded-lg"
                to="bills"
              >
                <HandCoins />
                <span className="flex-1 ms-3 whitespace-nowrap">Billing</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center p-2 text-gray-900 rounded-lg"
                to="payments"
              >
                <Banknote />
                <span className="flex-1 ms-3 whitespace-nowrap">Payments</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center p-2 text-gray-900 rounded-lg"
                to="messege"
                activeClassName="active-link"
              >
                <MessageCircle />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Send Messege
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
