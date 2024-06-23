
import { useState } from 'react';

const SetBill = () => {
  const [billId, setBillId] = useState('');
  const [billAmount, setBillAmount] = useState('');

  const handleSetBill = () => {
    console.log(`User ID: ${billId}, Bill Amount: ${billAmount}`);
  };

  return (
    <div>
      <div className="mb-3 border rounded-xl px-5 pt-8 pb-4">
        <div className="font-bold text-lg text-black text-left">Set Bill</div>
        <div className="mt-4 paument-search flex items-end justify-between gap-2">
          <div className="flex flex-col w-full text-black text-sm space-y-2 font-semibold text-left">
            <label htmlFor="billid">Enter User Id</label>
            <div className="inline-flex">
              <input
                className="border pl-4 pr-4 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="billid"
                name="billid"
                type="text"
                placeholder="Enter User ID"
                value={billId}
                onChange={(e) => setBillId(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full text-black text-sm space-y-2 font-semibold text-left">
            <label htmlFor="billamount">Enter Amount</label>
            <div className="inline-flex">
              <input
                className="border pl-4 pr-4 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="billamount"
                name="billamount"
                type="number"
                placeholder="Enter Amount"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn bg-black text-white hover:bg-gray-800"
            onClick={handleSetBill}
          >
            Set
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetBill;
