import DashBoardCard from "./DashBoardCard";

const DashboardOverview = () => {
  return (
    <div>
      <div className=" mb-4 mt-4  rounded-xl pb-4 relative bg-no-repeat bg-right bg-contain ">
        <div className="mt-6 lg:grid gap-2 md:grid-none md:flex lg:grid-cols-4  lg:justify-between">
          <DashBoardCard title="Total Clients" icon="group" num="67"/>
          <DashBoardCard title="Monthly Income" icon="payments" num="6000"/>
          <DashBoardCard title="Annual Revenue" icon="account_balance_wallet" num="7000"/>
          <DashBoardCard title="Net Balance" icon="account_balance" num="67000"/>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
