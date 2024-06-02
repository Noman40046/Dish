// eslint-disable-next-line no-unused-vars
import React from "react";
import PaymentSearch from "../components/payment-components/PaymentSearch";
import AllPayments from "../components/payment-components/AllPayments";

const Payment = () => {
  const allUsersData = [
    { id: 1, name: "Ali Ruddro", month: "January", ammount: 500 },
    { id: 2, name: "Touhidul", month: "January", ammount: 500 },
    { id: 3, name: "Noman Dipto", month: "January", ammount: 500 },
    { id: 4, name: "Foysal", month: "January", ammount: 500 },
    { id: 5, name: "Shadhin", month: "January", ammount: 500 },
  ];
  return (
    <div className="p-4 sm:ml-64">
      <main className=" w-full px-3 sm:px-10">
        {/*--- Payments search section--- */}
        <PaymentSearch />

        <section className="border rounded-lg">
          <div className=" flex justify-between w-full flex-wrap">
            <div className=" p-4 font-bold text-lg text-black">
              All Payments
            </div>
            <div className=" p-4 font-bold text-lg text-black">
              <div className="flex items-center gap-2  text-black text-sm  font-semibold">
                <div>
                  <input
                    className=" shadow-lg border  pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
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
          {/* All payments heading */}
          <div className=" border-b border-t  rounded-noneoverflow-visible text-sm client-table-row  bg-white mt-10  px-10  py-4 flex items-start justify-start gap-x-3  font-semibold  text-gray-600">
            <div className="text-left">Id</div>
            <div className="text-left">User name</div>
            <div className="text-left">Month</div>
            <div className="text-left">charge</div>
            <div className="text-left">Status</div>
          </div>
          <div className="bg-white mt-5 rounded-xl text-sm  text-black divide-y divide-indigo-50 overflow-x-auto  shadow">
            {/* ----All Payments---- */}
            {/* users Data Show */}
            {allUsersData.map((item, index) => (
              <AllPayments key={index} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Payment;
