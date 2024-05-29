 import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="app-header bg-[#6777EF] px-4">
        <div className="app-header-logo">
          <div className="logo">
            <span className="logo-icon">
              <span class="material-symbols-outlined text-4xl">
                diversity_2
              </span>
            </span>
            <h1 className="logo-title">
              <span>DISH</span>
              <span>ZONE</span>
            </h1>
          </div>
        </div>
        <div className="app-header-navigation ">
          <div className="tabs">
            <a href="#">Overview</a>
            <a href="#">Payments</a>
            <a href="#">Cards</a>
            <a href="#">Account</a>
            <a href="#">System</a>
            <a href="#">Business</a>
          </div>
        </div>
        <div className="app-header-actions ">
          <button className="user-profile ">
            <span>NOMAN DIPTO</span>
            <span>
              <img src="../../dipto.jpg" />
            </span>
          </button>
          <div className="app-header-actions-buttons">
            <button className="icon-button nav-icons large">
              <span class="material-symbols-outlined">search</span>
            </button>
            <button className="icon-button nav-icons large">
              <span class="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
        <div className="app-header-mobile">
          <button className="icon-button nav-icons large ">
            <span class="material-symbols-outlined ">menu</span>
          </button>
        </div>
      </header>

    
    </div>
  );
};
export default Header; 

  {/*   <div className="navbar bg-base-100 mb-3">
        <div className="flex-1">
        <Link className="text-3xl text-white bg-black" to="">DEMO</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink  className={({isActive})=> `${isActive ? "text-green-500" : "text-black" }`} to="">Home</NavLink>
            </li> 
            <li>
            <NavLink className={({isActive})=> `${isActive ? "text-green-500" : "text-black" }`} to="/about">about</NavLink>
            </li> 
            <li>
            <NavLink className={({isActive})=> `${isActive ? "text-green-500" : "text-black" }`} to="/gallery">gallery</NavLink>
            </li> 
            <li>
            <NavLink className={({isActive})=> `${isActive ? "text-green-500" : "text-black" }`} to="/contact">contact</NavLink>
            </li> 
          </ul>
        </div>
      </div> */}


      
