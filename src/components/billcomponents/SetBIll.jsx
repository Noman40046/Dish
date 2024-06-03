import React from "react";

const SetBIll = () => {
  return (
    <div>
      <div>
        <div className=" mb-4 mt-4 border rounded-xl px-5 sm:px-10  pt-8 pb-4 relative ">
          <div className=" font-semibold text-lg text-black ">Set BIll</div>
          <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-y-6  gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
            <div className="flex flex-col   md:w-40  text-black text-sm space-y-2 font-semibold">
              <div className="inline-flex relative">
                <input
                  className=" shadow-lg border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                  id="client"
                  name="client"
                  type="text"
                  placeholder="Enter User Id"
                />
              </div>
            </div>
            <div className="flex flex-col   md:w-40  text-black text-sm space-y-2 font-semibold">
              <div className="inline-flex relative">
                <input
                  className=" shadow-lg border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                  id="client"
                  name="client"
                  type="text"
                  placeholder="Enter Price"
                />
              </div>
            </div>
            <div>
              <span className="btn px-4 bg-black text-white ">Submit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetBIll;