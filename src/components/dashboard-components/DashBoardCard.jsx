import PropTypes from "prop-types";

const DashBoardCard = ({ title, icon, num, percent, arrow, cardimg }) => {
  return (
    <div>
      <div className=" text-black text-sm font-semibold dashboard-card ">
        <div className=" border  rounded-lg  p-4 ">
          <div className="flex flex-col w-full  items-start gap-4">
            <div className="lg:text-[14px] md:text-[10px] flex justify-between w-full">
              <div> {title}</div>
              <div>
                <span className="material-symbols-outlined">{icon}</span>
              </div>
            </div>

            <div className="card_bottom flex justify-between items-end w-full ">
              <div className="flex flex-col gap-2">
                <div className="client-number text-xl font-bold">{num}</div>
                <div className="text-sm text-green-700 gap-2 flex">
                  <span className="material-symbols-outlined text-sm w-6 text-center flex items-center h-6 p-1 rounded-full bg-green-300">
                    {arrow} {/* arrow_upward */}
                  </span>
                  <span className="font-bold">{percent}</span>
                  <div>this month</div>
                </div>
              </div>
              <div className="">
                <img
                  className="h-12 w-auto"
                  src={cardimg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
DashBoardCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  num: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
  cardimg: PropTypes.string.isRequired,
};

export default DashBoardCard;
