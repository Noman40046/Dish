import { Calendar } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import TotalCustomer from "./dashboard-components/TotalCustomer";
import MonthyIncome from "./dashboard-components/MonthyIncome";
import AnnualRevinue from "./dashboard-components/AnnualRevinue";
import TotalSummary from "./dashboard-components/TotalSummary";
import ClientView from "./dashboard-components/ClientView";

const Dashboard = () => {
  return (
    <div className="p-4 sm:ml-64" >
      <main className=" w-full px-3 sm:px-10">

        <section>
          <div
            className=" mb-4 mt-4 border rounded-xl px-5 sm:px-10  pt-8 pb-4 relative xl:bg-[url('../images/invoice.png')] bg-no-repeat bg-right bg-contain ">
            {/*   <div className=" font-semibold text-lg text-black">Search User</div> */}


            <div className="mt-6  gap-x-y md:flex md:space-x-6 md:gap-x-0 justify-between  flex-wrap">
              <div className="flex  justify-between  text-black text-sm space-y-2 font-semibold">
                <div className="inline-flex relative border-2 h-32 w-52 dashboard-card  rounded-lg  p-4 ">
                  <div className="flex flex-col w-full  items-center gap-4">
                    <div className="heading text-[12px] flex justify-between w-full">
                      <div> Total Clients</div>
                      <div >
                        <span class="material-symbols-outlined">
                          group
                        </span>
                      </div>
                    </div>
                    <div className="client-number text-3xl font-bold">
                      67
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  justify-between  text-black text-sm space-y-2 font-semibold">

                <div className="inline-flex relative border-2 h-32 w-52 dashboard-card rounded-lg  p-4 ">
                  <div className="flex flex-col w-full  items-center gap-4">
                    <div className="heading text-[12px] flex justify-between w-full">
                      <div>Monthly Income</div>
                      <div >
                        <span class="material-symbols-outlined">
                          payments
                        </span>
                      </div>
                    </div>
                    <div className="client-number text-3xl font-bold">
                      5000
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  justify-between  text-black text-sm space-y-2 font-semibold">
                <div className="inline-flex relative border-2 h-32 w-52 dashboard-card rounded-lg  p-4 ">
                  <div className="flex flex-col w-full  items-center gap-4">
                    <div className="heading text-[12px] flex justify-between w-full">
                      <div> Annual Revenue</div>
                      <div >
                        <span class="material-symbols-outlined">
                          account_balance_wallet
                        </span>
                      </div>
                    </div>
                    <div className="client-number text-3xl font-bold">
                      67000
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  justify-between  text-black text-sm space-y-2 font-semibold">
                <div className="inline-flex relative border-2 h-32 w-52 dashboard-card rounded-lg  p-4 ">
                  <div className="flex flex-col w-full  items-center gap-4">
                    <div className="heading text-[12px] flex justify-between w-full">
                      <div>Net Balance</div>
                      <div >
                        <span class="material-symbols-outlined">
                          account_balance
                        </span>
                      </div>
                    </div>
                    <div className="client-number text-3xl font-bold">
                      67000
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>



        <section className="border rounded-lg">
          <div className=" flex justify-between w-full flex-wrap">
            <div className=" p-4 font-bold text-lg text-black">All User</div>
            <div className=" p-4 font-bold text-lg text-black">
              <div className="flex items-center gap-2  text-black text-sm flex-wrap font-semibold">

                <div>
                  <input
                    className=" shadow-lg border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client" name="client" type="text" placeholder='Enter User Id' />
                </div>
                <div className="btn bg-black text-white "><span >Search User</span></div>
              </div>
            </div>
          </div>
          <div
            className=" border-b border-t  rounded-noneoverflow-visible text-sm client-table-row   bg-white mt-10  px-10  py-4 flex items-start justify-start gap-x-3  font-semibold  text-gray-600">
            <div className="text-left">Id</div>
            <div className="text-left">User name</div>
            <div className="text-left">Contact</div>
            <div className="text-left">charge</div>

          </div>
          <div className="bg-white mt-5 rounded-xl text-sm  text-black divide-y divide-indigo-50 overflow-x-auto  shadow">
            <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4">
              <div className="text-left ">12</div>
              <div className="text-left">John Doe</div>
              <div className="text-left">01518999578</div>
              <div className="text-left">500৳</div>

            </div>

            <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4  ">
              <div className="text-left">13</div>
              <div className="text-left">Thomas Bride</div>
              <div className="text-left">01518999578</div>
              <div className="text-left"> 500৳</div>

            </div>

            <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4">
              <div className="text-left">14</div>
              <div className="text-left">Ellen Bean</div>
              <div className="text-left">01518999578</div>
              <div className="text-left"> 500৳</div>

            </div>

            <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4  ">
              <div className="text-left">15</div>
              <div className="text-left">Jack Sanders</div>
              <div className="text-left">01518999578</div>
              <div className="text-left"> 500৳</div>

            </div>

            <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4">
              <div className="text-left">16</div>
              <div className="text-left">Leslie Ive</div>
              <div className="text-left">01518999578</div>
              <div className="text-left">500৳</div>

            </div>


          </div>
        </section>


      </main>
    </div>
  );
};

export default Dashboard;
