/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const AllPayments = ({item}) => {
  return (
    <div>
      {/* All payments */}
      
      <div
        key={item.id}
        className="client-table-row flex items-start justify-start gap-x-3  mb-4 px-10 py-4"
      >
        <div className="text-left ">{item.id}</div>
        <div className="text-left">{item.name}</div>
        <div className="text-left">{item.month}</div>
        <div className="text-left">{item.ammount}৳</div>
        <div className="text-left">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <span className="px-4 py-1 rounded-lg bg-rose-400  text-white">
                Pending
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <a>Approve</a>
              </li>
              <li>
                <a>Decline</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPayments;
