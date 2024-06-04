

const SetBIll = () => {
  return (
    <div>
     <div>
    <div>
      <div className=" mb-4 mt-4 border rounded-xl px-5 pt-8 pb-4 ">
        <div className=" font-bold text-lg text-black text-left ">
          Search Payments
        </div>
        <div className="mt-6 paument-search flex items-end justify-between gap-2">
          <div className="flex flex-col w-full text-black text-sm space-y-2 font-semibold text-left">
            <label htmlFor="billid">Enter User Id</label>
            <div className="inline-flex  ">
              <input
                className=" shadow-lg border  pl-4 pr-4 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="billid"
                name="billid"
                type="text"
                placeholder="Enter User ID"
              />
            </div>
          </div>
          <div className="flex flex-col w-full  text-black text-sm space-y-2 font-semibold text-left">
            <label htmlFor="client">Enter Ammount</label>
            <div className="inline-flex  ">
              <input
                className=" shadow-lg border  pl-4 pr-4 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="billammount"
                name="billammount"
                type="number"
                placeholder="Enter Ammount"
              />
            </div>
          </div>
          <div className="flex flex-col w-fit   font-semibold">
            <div className="btn w-52 bg-black text-white hover:bg-gray-800">
              Set Bill
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default SetBIll;
