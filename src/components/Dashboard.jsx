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
    <div>
      <div className="p-4 sm:ml-64">
        <div className="overview p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <TotalCustomer />
            <MonthyIncome />
            <AnnualRevinue />
          </div>

          <div className="summary flex items-start justify-between flex-wrap  mb-10 rounded gap-5 mt-7  dark:bg-gray-800 ">
            <TotalSummary />
            <ClientView/>
          </div>

          {/* six & seven---- */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"></div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
