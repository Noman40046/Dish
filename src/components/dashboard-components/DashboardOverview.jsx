import { LuUserCheck2, LuUserX2, LuUsers2 } from "react-icons/lu";
import DashBoardCard from "./DashBoardCard";
import { PiMoney } from "react-icons/pi";
const DashboardOverview = () => {
  
  return (
    <div>
      <div className=" mb-4 mt-4  rounded-xl pb-4 relative bg-no-repeat bg-right bg-contain ">
        <div className="mt-6 lg:grid gap-2 md:grid-none md:flex lg:grid-cols-4  lg:justify-between">
          <DashBoardCard title="Total users" percent="34%" icon={<LuUsers2 />} num="67" arrow="arrow_upward" cardimg="./card_graph.png"/>
          <DashBoardCard title="Active users" percent="24%" icon={<LuUserCheck2 />} num="6000" arrow="arrow_downward" cardimg="./card_down_graph.png"/>
          <DashBoardCard title="Inactive users" percent="14%" icon={<LuUserX2 />} num="7000" arrow="arrow_upward" cardimg="./card_graph_3.png"/>
          <DashBoardCard title="Monthly income" percent="35%" icon={<PiMoney />} num="67000৳" arrow="arrow_upward" cardimg="./card_down_graph.png"/>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
