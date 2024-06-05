// eslint-disable-next-line no-unused-vars
import {
  Banknote,
  Grid2X2,
  HandCoins,
  LogOut,
  MessageCircle,
  UserRoundPlus,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Mainheader = () => {
  return (
    <div className="header-container ">
      <div className="navbar rounded-full  fixed top-0 left-0 lg:rounded-none bg-[#FBFBFB] w-full  border text-black">
      <div className="navbar-start">
          <img className="ml-8 w-8 h-auto" src="https://cdn-icons-png.flaticon.com/512/3335/3335909.png" alt="logo" />
        </div>
        <div className="navbar-center nav-heading">
          <a className=" revenue-ammount font-bold text-3xl bg-gradient-to-r from-indigo-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text">
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
            <li>
              <NavLink to="adduser">
              <UserRoundPlus/>
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
