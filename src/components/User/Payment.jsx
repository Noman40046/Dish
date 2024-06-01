import React from "react";

const Payment = () => {
  return (
    <div className="p-4 sm:ml-64" >
      <main className=" w-full px-3 sm:px-10">

        <section>
          <div
            className=" mb-4 mt-4 border rounded-xl px-5 sm:px-10  pt-8 pb-4 relative xl:bg-[url('../images/invoice.png')] bg-no-repeat bg-right bg-contain ">
            <div className=" font-semibold text-lg text-black">All Payments</div>


            <div className="mt-6 grid grid-cols-1 items-end xs:grid-cols-2 gap-y-6  gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
              <div className="flex flex-col   md:w-40  text-black text-sm space-y-2 font-semibold">
                <label for="client">Begin Date</label>
                <div className="inline-flex relative">
                  <input
                    className=" shadow-lg border tracking-wider pl-4 pr-4 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client" type="date" />

                </div>
              </div>

              <div className="flex flex-col md:w-40  text-black text-sm space-y-2 font-semibold">
                <label for="client">End Date</label>
                <div className="inline-flex relative">
                  <input
                    className=" shadow-lg border tracking-wider pl-4 pr-4 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client" type="date" />
                </div>
              </div>


              <div className="flex flex-col w-full   font-semibold">
                <div className="btn w-52 bg-black text-white hover:bg-gray-800">Search Payments</div>
              </div>

            </div>
          </div>
        </section>



        <section className="border rounded-lg">
          <div
            className=" overflow-visible text-sm invoice-table-row  invoice-table-header bg-white mt-10 rounded-xl px-10  py-4 flex items-center gap-x-3  font-semibold  text-gray-600">
            <div className="text-left">Invoice</div>
            <div className="text-left">Client name</div>
            <div className="text-left">Date</div>
            <div className="text-left ">Due date</div>
            <div className="text-left">Total</div>
            <div className="flex-1  text-left">Status</div>
          </div>
          <div className="bg-white mt-5 rounded-xl text-sm  text-black divide-y divide-indigo-50 overflow-x-auto  shadow">
            <div className="invoice-table-row flex items-center  gap-x-3 px-10 py-4">

              <div className="text-left ">12</div>
              <div className="text-left">John Doe</div>
              <div className="text-left">2019/11/20</div>
              <div className="text-left">2019/12/20</div>
              <div className="text-left">$10.00</div>

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
              <div className="text-left">2019/11/20</div>
              <div className="text-left">2019/12/20</div>
              <div className="text-left">$670.00</div>
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
              <div className="text-left">2019/11/20</div>
              <div className="text-left">2019/12/20</div>
              <div className="text-left">$1032.00</div>
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
              <div className="text-left">2020/11/20</div>
              <div className="text-left">2020/12/20</div>
              <div className="text-left">$590.00</div>
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
              <div className="text-left">2020/11/20</div>
              <div className="text-left">2020/12/20</div>
              <div className="text-left">$230.00</div>
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
