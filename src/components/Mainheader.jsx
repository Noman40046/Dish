import { Link } from "react-router-dom";


const Mainheader = () => {
  return (
    <div className="header-container ">
      <div className="navbar  bg-[#FBFBFB]  border text-black">
        <div className="navbar-start">
          <div className="dropdown menu-dropdown">
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
              className="menu menu-sm gap-4 text-black  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="bills">Billing</Link>
              </li>
              <li>
                <Link to="payments">Payments</Link>
              </li>
              <li>
                <Link to="messege">Send Messege</Link>
              </li>
              <li>
                <Link to="/">Sign Out</Link>
              </li>
            </ul>
          </div>
          <div className="logo pl-10"><img className="w-8" src="../../public/logo.png" alt="" /></div>
        </div>
        <div className="navbar-center nav-heading">
          <a className=" bg-transparent  border-none text-black  text-xl">ADMIN DASHBOARD</a>{/*  -ml-[500px]  */}
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
          <span className="material-symbols-outlined">
account_circle
</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainheader;
