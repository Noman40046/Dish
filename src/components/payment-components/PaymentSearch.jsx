// eslint-disable-next-line no-unused-vars
import React from "react";

const PaymentSearch = () => {
  return (
    <div>
    <div>
      <div className=" mb-4 mt-4 border rounded-xl px-5 pt-8 pb-4 ">
        <div className=" font-bold text-lg text-black text-left ">
          Search Payments
        </div>
        <div className="mt-6 paument-search flex items-end justify-between gap-2">
          <div className="flex flex-col w-full text-black text-sm space-y-2 font-semibold text-left">
            <label htmlFor="client">Begin Date</label>
            <div className="inline-flex  ">
              <input
                className=" shadow-lg border  pl-4 pr-4 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="client"
                name="client"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-col w-full  text-black text-sm space-y-2 font-semibold text-left">
            <label htmlFor="client">End Date</label>
            <div className="inline-flex  ">
              <input
                className=" shadow-lg border  pl-4 pr-4 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="client"
                name="client"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-col w-fit   font-semibold">
            <div className="btn w-52 bg-black text-white hover:bg-gray-800">
              Search Payments
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PaymentSearch;
