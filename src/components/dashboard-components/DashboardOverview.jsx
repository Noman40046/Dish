const DashboardOverview = () => {
  return (
    <div>
      <div className=" mb-4 mt-4  rounded-xl pb-4 relative bg-no-repeat bg-right bg-contain ">
        <div className="mt-6 md:flex justify-between  flex-wrap">
          <div className="flex  justify-between  text-black text-sm space-y-2 font-semibold">
            <div className="inline-flex relative border-2 h-32 w-52 dashboard-card  rounded-lg  p-4 ">
              <div className="flex flex-col w-full  items-center gap-4">
                <div className="heading text-[12px] flex justify-between w-full">
                  <div> Total Clients</div>
                  <div>
                    <span className="material-symbols-outlined">group</span>
                  </div>
                </div>
                <div className="client-number text-3xl font-bold">67</div>
              </div>
            </div>
          </div>
          <div className="flex  justify-between  text-black text-sm space-y-2 font-semibold">
            <div className="inline-flex relative border-2 h-32 w-52 dashboard-card rounded-lg  p-4 ">
              <div className="flex flex-col w-full  items-center gap-4">
                <div className="heading text-[12px] flex justify-between w-full">
                  <div>Monthly Income</div>
                  <div>
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                </div>
                <div className="client-number text-3xl font-bold">5000</div>
              </div>
            </div>
          </div>
          <div className="flex  justify-between  text-black text-sm space-y-2 font-semibold">
            <div className="inline-flex relative border-2 h-32 w-52 dashboard-card rounded-lg  p-4 ">
              <div className="flex flex-col w-full  items-center gap-4">
                <div className="heading text-[12px] flex justify-between w-full">
                  <div> Annual Revenue</div>
                  <div>
                    <span className="material-symbols-outlined">
                      account_balance_wallet
                    </span>
                  </div>
                </div>
                <div className="client-number text-3xl font-bold">67000</div>
              </div>
            </div>
          </div>
          <div className="flex  justify-between  text-black text-sm space-y-2 font-semibold">
            <div className="inline-flex relative border-2 h-32 w-52 dashboard-card rounded-lg  p-4 ">
              <div className="flex flex-col w-full  items-center gap-4">
                <div className="heading text-[12px] flex justify-between w-full">
                  <div>Net Balance</div>
                  <div>
                    <span className="material-symbols-outlined">
                      account_balance
                    </span>
                  </div>
                </div>
                <div className="client-number text-3xl font-bold">67000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
