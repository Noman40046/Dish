// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PaymentSearch from "../components/payment-components/PaymentSearch";
import AllPayments from "../components/payment-components/AllPayments";

const Payment = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsersData, setFilteredUsersData] = useState([]);

  useEffect(() => {
    fetch("./data/payments.json")
      .then((response) => response.json())
      .then((data) => {
        setAllUsersData(data);
        setFilteredUsersData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButtonClick = () => {
    const filteredData = allUsersData.filter((user) =>
      user.id.toString().includes(searchTerm)
    );
    setFilteredUsersData(filteredData);
  };

  return (
    <div className="p-4 sm:ml-64">
      <main className="w-full px-3 sm:px-10">
        {/*--- Payments search section--- */}
        <PaymentSearch />

        <section className="border rounded-lg">
          <div className="flex p-4 items-center justify-between w-full flex-wrap">
            <div className="font-bold text-lg text-black">All Payments</div>
            <div className="font-bold text-lg text-black">
              <div className="flex items-center gap-2 text-black text-sm font-semibold">
                <div>
                  <input
                    className="border pl-4 pr-10 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    id="client"
                    name="client"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    placeholder="Enter User Id"
                  />
                </div>
                <div
                  className="btn bg-black text-white cursor-pointer"
                  onClick={handleSearchButtonClick}
                >
                  <span>Search</span>
                </div>
              </div>
            </div>
          </div>

          {/* All payments heading */}
          <div className="border-b border-t rounded-none overflow-visible text-sm client-table-row bg-white px-10 py-4 flex items-start justify-start gap-x-3 font-semibold text-gray-600">
            <div className="text-left w-1/5">Id</div>
            <div className="text-left w-1/5">Name</div>
            <div className="text-left w-1/5">Date</div>
            <div className="text-left w-1/5">Month</div>
            <div className="text-left w-1/5">Charge</div>
            <div className="text-left w-1/5">Status</div>
          </div>

          <div className="bg-white mt-5 rounded-xl text-sm text-black divide-y divide-indigo-50 overflow-x-auto shadow">
            {/* ----All Payments---- */}
            {filteredUsersData.map((item) => (
              <AllPayments key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Payment;
