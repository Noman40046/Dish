// eslint-disable-next-line no-unused-vars
import {
  Banknote,
  Grid2X2,
  HandCoins,
  LogOut,
  MessageCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Mainheader = () => {
  return (
    <div className="header-container ">
      <div className="navbar  bg-[#FBFBFB]  border text-black">
        <div className="navbar-start"></div>
        <div className="navbar-center nav-heading">
          <a className=" bg-transparent  border-none text-black  text-xl">
            ADMIN DASHBOARD
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-full"
            >
              <span className="material-symbols-outlined">account_circle</span>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <a href="/"> <LogOut />Log Out</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      {/* mobile menu start */}
      <div className="lg:hidden block">
        <div className="fixed bottom-0 mb-2 flex justify-center w-full px-4">
          <ul className="menu menu-horizontal bg-base-200 w-fit rounded-box flex justify-center px-4 gap-2">
            <li>
              <NavLink to="/dashboard">
                <Grid2X2 />
              </NavLink>
            </li>

            <li>
              <NavLink to="bills">
                <HandCoins />
              </NavLink>
            </li>
            <li>
              <NavLink to="payments">
                <Banknote />
              </NavLink>
            </li>
            <li>
              <NavLink to="messege">
                <MessageCircle />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* mobile menu end */}
    </div>
  );
};

export default Mainheader;
