import React from "react";

const Payment = () => {
  return (
    <div className="p-4 sm:ml-64" >
      <main className=" w-full px-3 sm:px-10">

        <section>
          <div
            className=" mb-4 mt-4 border rounded-xl px-5 sm:px-10  pt-8 pb-4 relative xl:bg-[url('../images/invoice.png')] bg-no-repeat bg-right bg-contain ">
            <div className=" font-semibold text-lg text-black">All Invoices</div>


            <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-y-6  gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
              <div className="flex flex-col   md:w-40  text-black text-sm space-y-2 font-semibold">
                <label for="client">Begin Date</label>
                <div className="inline-flex relative">
                  <input
                    className=" shadow-lg border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client" type="text" value="2019/02/28" />

                  <span className="absolute top-0 right-0 m-3 pointer-events-none ">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>

                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:w-40  text-black text-sm space-y-2 font-semibold">
                <label for="client">End Date</label>
                <div className="inline-flex relative">
                  <input
                    className="shadow-lg border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client" type="text" value="2019/12/09" />

                  <span className="absolute top-0 right-0 m-3 pointer-events-none ">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>

                    </svg>
                  </span>
                </div>
              </div>


              <div className="flex flex-col md:w-40  text-black text-sm space-y-2 font-semibold">
                <label for="client">Status</label>
                <div className="inline-flex relative">
                  <select
                    className="shadow-lg border  px-4 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client">
                    <option value="Any">Any</option>
                  </select>
                  <span className="absolute top-0 right-0 m-3 pointer-events-none ">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:w-40 text-black text-sm space-y-2 font-semibold">
                <label for="client">Client</label>
                <div className="inline-flex relative">
                  <select
                    className="shadow-lg border  px-4 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client">
                    <option value="Any">Any</option>
                  </select>
                  <span className="absolute top-0 right-0 m-3 pointer-events-none ">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="border rounded-lg">
          <div
            className=" overflow-visible text-sm invoice-table-row  invoice-table-header bg-white mt-10 rounded-xl px-10  py-4 flex items-center gap-x-3  font-semibold  text-gray-600">
            <div className="text-left">Invoice</div>
            <div className="text-left">Client name</div>
            <div className="text-center">Date</div>
            <div className="text-center ">Due date</div>
            <div className="text-center">Total</div>
            <div className="flex-1  text-center">Status</div>
          </div>
          <div className="bg-white mt-5 rounded-xl text-sm  text-black divide-y divide-indigo-50 overflow-x-auto  shadow">
            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left ">12</div>
              <div className="text-left">John Doe</div>
              <div className="text-center">2019/11/20</div>
              <div className="text-center">2019/12/20</div>
              <div className="text-center">$10.00</div>
              <div className="text-right ">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button"><span className="px-4 py-1 rounded-lg bg-rose-400  text-white">Pending</span></div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                    <li><a>Approve</a></li>
                    <li><a>Decline</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4 bg-indigo-50">
              <div className="text-left">13</div>
              <div className="text-left">Thomas Bride</div>
              <div className="text-center">2019/11/20</div>
              <div className="text-center">2019/12/20</div>
              <div className="text-center">$670.00</div>
              <div className="text-right ">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button"><span className="px-4 py-1 rounded-lg bg-indigo-400  text-white">Accepted</span></div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                    <li><a>Approve</a></li>
                    <li><a>Decline</a></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left">14</div>
              <div className="text-left">Ellen Bean</div>
              <div className="text-center">2019/11/20</div>
              <div className="text-center">2019/12/20</div>
              <div className="text-center">$1032.00</div>
              <div className="text-right ">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button"><span className="px-4 py-1 rounded-lg bg-rose-400  text-white">Pending</span></div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                    <li><a>Approve</a></li>
                    <li><a>Decline</a></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4 bg-indigo-50">
              <div className="text-left">15</div>
              <div className="text-left">Jack Sanders</div>
              <div className="text-center">2020/11/20</div>
              <div className="text-center">2020/12/20</div>
              <div className="text-center">$590.00</div>
              <div className="text-right ">
              <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button"><span className="px-4 py-1 rounded-lg bg-indigo-400  text-white">Accepted</span></div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                    <li><a>Approve</a></li>
                    <li><a>Decline</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left">16</div>
              <div className="text-left">Leslie Ive</div>
              <div className="text-center">2020/11/20</div>
              <div className="text-center">2020/12/20</div>
              <div className="text-center">$230.00</div>
              <div className="text-right ">
                <div className="dropdown dropdown-end">
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
