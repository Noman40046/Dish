// eslint-disable-next-line no-unused-vars
import React from "react";

const Payment = () => {
  return (
    <div className="p-4 sm:ml-64" >
      <main className=" w-full px-3 sm:px-10">
        <section>
          <div className=" mb-4 mt-4 border rounded-xl px-5 sm:px-10  pt-8 pb-4 relative bg-no-repeat bg-right bg-contain ">
            <center>
            <div className=" font-semibold text-lg text-black">All Payments</div>
            <div className="mt-6  flex items-end justify-center gap-2">
              <div className="flex flex-col   md:w-40  text-black text-sm space-y-2 font-semibold">
                <label htmlFor="client">Begin Date</label>
                <div className="inline-flex relative">
                  <input
                    className=" shadow-lg border  pl-4 pr-4 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client" type="date" />
                </div>
              </div>
              <div className="flex flex-col md:w-40  text-black text-sm space-y-2 font-semibold">
                <label htmlFor="client">End Date</label>
                <div className="inline-flex relative">
                  <input
                    className=" shadow-lg border  pl-4 pr-4 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client" type="date" />
                </div>
              </div>
              <div className="flex flex-col w-full   font-semibold">
                <div className="btn w-52 bg-black text-white hover:bg-gray-800">Search Payments</div>
              </div>
            </div>
            </center>
          </div>
        </section>

        {/* ----------- */}
        <section className="border rounded-lg">
          <div className=" flex justify-between w-full flex-wrap">
            <div className=" p-4 font-bold text-lg text-black">All User</div>
            <div className=" p-4 font-bold text-lg text-black">
              <div className="flex items-center gap-2  text-black text-sm  font-semibold">
                <div>
                  <input
                    className=" shadow-lg border  pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client" type="text" placeholder='Enter User Id' />
                </div>
                <div className="btn bg-black text-white "><span >Search User</span></div>
              </div>
            </div>
          </div>
          <div
            className=" border-b border-t  rounded-noneoverflow-visible text-sm client-table-row  bg-white mt-10  px-10  py-4 flex items-start justify-start gap-x-3  font-semibold  text-gray-600">
            <div className="text-left">Id</div>
            <div className="text-left">User name</div>
            <div className="text-left">Month</div>
            <div className="text-left">charge</div>
            <div className="text-left">Status</div>
          </div>
          <div className="bg-white mt-5 rounded-xl text-sm  text-black divide-y divide-indigo-50 overflow-x-auto  shadow">
            <div className="client-table-row flex items-start justify-start gap-x-3  mb-4 px-10 py-4">
              <div className="text-left ">12</div>
              <div className="text-left">John Doe</div>
              <div className="text-left">January</div>
              <div className="text-left">500৳</div>
              <div className="text-left">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button"><span className="px-4 py-1 rounded-lg bg-rose-400  text-white">Pending</span></div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                    <li><a>Approve</a></li>
                    <li><a>Decline</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-table-row flex mb-4 items-start justify-start gap-x-3 px-10 py-4 ">
              <div className="text-left">13</div>
              <div className="text-left">Thomas Bride</div>
              <div className="text-left">February</div>
              <div className="text-left"> 500৳</div>
              <div className="text-left">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button"><span className="px-4 py-1 rounded-lg bg-indigo-400  text-white">Accepted</span></div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                    <li><a>Approve</a></li>
                    <li><a>Decline</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-table-row mb-4 flex items-start justify-start gap-x-3 px-10 py-4">
              <div className="text-left">14</div>
              <div className="text-left">Ellen Bean</div>
              <div className="text-left">March</div>
              <div className="text-left"> 500৳</div>
              <div className="text-left"> <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button"><span className="px-4 py-1 rounded-lg bg-indigo-400  text-white">Accepted</span></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                  <li><a>Approve</a></li>
                  <li><a>Decline</a></li>
                </ul>
              </div>
              </div>
            </div>
            <div className="client-table-row mb-4 flex items-start justify-start gap-x-3 px-10 py-4  ">
              <div className="text-left">15</div>
              <div className="text-left">Jack Sanders</div>
              <div className="text-left">April</div>
              <div className="text-left"> 500৳</div>
              <div className="text-left"> <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button"><span className="px-4 py-1 rounded-lg bg-rose-400  text-white">Pending</span></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                  <li><a>Approve</a></li>
                  <li><a>Decline</a></li>
                </ul>
              </div>
              </div>
            </div>
            <div className="client-table-row mb-4 flex items-start justify-start gap-x-3 px-10 py-4">
              <div className="text-left">16</div>
              <div className="text-left">Leslie Ive</div>
              <div className="text-left">May</div>
              <div className="text-left">500৳</div>
              <div className="text-left"><div className="dropdown dropdown-end">
                <div tabIndex={0} role="button"><span className="px-4 py-1 rounded-lg bg-rose-400  text-white">Pending</span></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                  <li><a>Approve</a></li>
                  <li><a>Decline</a></li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Payment;
