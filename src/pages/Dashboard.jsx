// eslint-disable-next-line no-unused-vars
import React from "react";
import ShowUser from "../components/ShowUsers/ShowUser";
import DashboardOverview from "../components/dashboard-components/DashboardOverview";

const Dashboard = () => {
  return (
    <div className="p-4 sm:ml-64">
      <main className=" w-full px-3 sm:px-10">
          <DashboardOverview/>
        {/* Show All User Data */}
        <ShowUser />
      </main>
    </div>
  );
};

export default Dashboard;
