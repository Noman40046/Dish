import PropTypes from "prop-types";
const DashBoardCard = ({ title, icon, num }) => {
  return (
    <div>
      <div className=" text-black text-sm font-semibold dashboard-card ">
        <div className=" border-2  rounded-lg  p-4 ">
          <div className="flex flex-col w-full  items-start gap-4">
            <div className="lg:text-[14px] md:text-[10px] flex justify-between w-full">
              <div> {title}</div>
              <div>
                <span className="material-symbols-outlined">{icon}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="client-number text-xl font-bold">{num}</div>
              <div className="text-sm text-green-700 flex">
                <span className="material-symbols-outlined text-sm w-6 text-center flex items-center h-6 p-1 rounded-full bg-green-300">
                  arrow_upward
                </span>
                <span className="font-bold">12%</span>
              </div>
            </div>
            <div>Compared to last week</div>
          </div>
        </div>
      </div>
    </div>
  );
};
DashBoardCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
};

export default DashBoardCard;
