import { LuUserCheck2, LuUserX2, LuUsers2 } from "react-icons/lu";
import DashBoardCard from "./DashBoardCard";
import { PiMoney } from "react-icons/pi";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const DashboardOverview = () => {
  const [TotalUser, setTotalUser] = useState(0);
  const [ActiveUser, setActiveUser] = useState(0);
  const [InactiveveUser, setInactiveUser] = useState(0);
  const [MonthlyIncome, setMonthlyIncome] = useState(0);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/stats")
      .then((result) => {
        console.log(result.data.totalUsers);
        setTotalUser(result.data.totalUsers);
        setActiveUser(result.data.totalActiveUsers);
        setInactiveUser(result.data.totalInactiveUsers);
        setMonthlyIncome(result.data.monthlyAverageIncome);
      })
      .catch((err) => {
        console.log(err);
        // Handle errors or set default values if necessary
      });
  }, [axiosSecure]); // Ensure useEffect runs only once after component mounts

  if (TotalUser === null || ActiveUser === null || InactiveveUser === null) {
    return <div>Loading...</div>; // Show a loading state while user data is being fetched
  }

  return (
    <div>
      <div className=" mb-4 mt-4  rounded-xl pb-4 relative bg-no-repeat bg-right bg-contain ">
        <div className="mt-6 lg:grid gap-2 md:grid-none md:flex lg:grid-cols-4  lg:justify-between">
          <DashBoardCard
            title="Total users"
            percent="34%"
            icon={<LuUsers2 />}
            num={TotalUser}
            arrow="arrow_upward"
            cardimg="./card_graph.png"
          />
          <DashBoardCard
            title="Active users"
            percent="24%"
            icon={<LuUserCheck2 />}
            num={ActiveUser}
            arrow="arrow_downward"
            cardimg="./card_down_graph.png"
          />
          <DashBoardCard
            title="Inactive users"
            percent="14%"
            icon={<LuUserX2 />}
            num={InactiveveUser}
            arrow="arrow_upward"
            cardimg="./card_graph_3.png"
          />
          <DashBoardCard
            title="Monthly income"
            percent="35%"
            icon={<PiMoney />}
            num={MonthlyIncome}
            arrow="arrow_upward"
            cardimg="./card_down_graph.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
