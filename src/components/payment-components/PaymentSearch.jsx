// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const PaymentSearch = () => {
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearchPayments = () => {
    console.log(`Begin Date: ${beginDate}, End Date: ${endDate}`);
  };

  return (
    <div>
      <div className="mb-4 mt-4 border rounded-xl px-5 pt-8 pb-4">
        <div className="font-bold text-lg text-black text-left">
          Search Payments
        </div>
        <div className="mt-6 paument-search flex items-end justify-between gap-2">
          <div className="flex flex-col w-full text-black text-sm space-y-2 font-semibold text-left">
            <label htmlFor="beginDate">Begin Date</label>
            <div className="inline-flex">
              <input
                className="border pl-4 pr-4 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="beginDate"
                name="beginDate"
                type="date"
                value={beginDate}
                onChange={(e) => setBeginDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full text-black text-sm space-y-2 font-semibold text-left">
            <label htmlFor="endDate">End Date</label>
            <div className="inline-flex">
              <input
                className="border pl-4 pr-4 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="endDate"
                name="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn bg-black text-white hover:bg-gray-800 flex items-center"
            onClick={handleSearchPayments}
          >
            <Search /> Search Payments
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSearch;
