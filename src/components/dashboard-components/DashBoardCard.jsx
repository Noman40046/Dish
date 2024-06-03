import PropTypes from "prop-types";
const DashBoardCard = ({ title, icon, num }) => {
  return (
    <div>
      <div className=" text-black text-sm font-semibold dashboard-card ">
        <div className=" border-2 h-32 rounded-lg  p-4 ">
          <div className="flex flex-col w-full  items-end gap-4">
            <div className="heading text-[12px] flex justify-between w-full">
              <div> {title}</div>
              <div>
                <span className="material-symbols-outlined">{icon}</span>
              </div>
            </div>
            <div className="client-number text-3xl font-bold">{num}</div>
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
