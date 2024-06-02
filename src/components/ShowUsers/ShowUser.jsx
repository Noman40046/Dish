// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const ShowUser = () => {
  const allUsersData = [
    { id: 1, name: "Ali", contact: "017552324341", charge: 500 },
    { id: 2, name: "Bli", contact: "017552324341", charge: 500 },
    { id: 3, name: "Cli", contact: "017552324341", charge: 500 },
    { id: 4, name: "Dli", contact: "017552324341", charge: 500 },
    { id: 5, name: "Fli", contact: "017552324341", charge: 500 },
  ];

  return (
    <section className="border rounded-lg">
      <div className=" flex justify-between w-full flex-wrap">
        <div className=" p-4 font-bold text-lg text-black">All User</div>
        <div className=" p-4 font-bold text-lg text-black">
          <div className="flex items-center gap-2  text-black text-sm  font-semibold">
            <div>
              <input
                className=" shadow-lg border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="client"
                name="client"
                type="text"
                placeholder="Enter User Id"
              />
            </div>
            <div className="btn bg-black text-white ">
              <span>Search User</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-b border-t  rounded-noneoverflow-visible text-sm client-table-row   bg-white mt-10  px-10  py-4 flex items-start justify-start gap-x-3  font-semibold  text-gray-600">
        <div className="text-left">Id</div>
        <div className="text-left">User name</div>
        <div className="text-left">Contact</div>
        <div className="text-left">Charge</div>
        <div className="text-left">Action</div>
      </div>

      <div className="bg-white mt-5 rounded-xl text-sm   text-black divide-y divide-indigo-50 overflow-x-auto  shadow">
        {/* users Data Show */}
        {allUsersData.map((item, index) => (
          <SingleUser key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ShowUser;
