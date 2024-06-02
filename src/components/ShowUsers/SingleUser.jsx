/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, NavLink } from "react-router-dom";

const SingleUser = ({ item }) => {
  return (
    <div>
      <div
        key={item.id}
        className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4"
      >
        <div className="text-left ">{item.id}</div>
        <div className="text-left">{item.name}</div>
        <div className="text-left">{item.contact}</div>
        <div className="text-left">{item.charge} ৳</div>
        <div className="text-left">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              {" "}
              <div className="cursor-pointer  hover:text-blue-900 font-bold text-lg">
                ....
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <NavLink to={`/dashboard/userprofile/${item.id}`}>View</NavLink>
              </li>
              <li>
                <Link to="edit">Edit</Link>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
