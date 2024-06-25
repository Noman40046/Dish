import PropTypes from "prop-types";
const SendMessage = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div
        key={item.id}
        className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4"
      >
        <div className="text-left ">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-md"
          />
        </div>
        <div className="text-left ">{item.id}</div>
        <div className="text-left">{item.name}</div>
        <div className="text-left">{item.phone}</div>
        <div className="text-left">{item.bill} ৳</div>
        {/*      <div className="text-left">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              {" "}
              <div className="cursor-pointer  hover:text-blue-900 font-bold text-lg">
                ....
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <NavLink to={`/dashboard/userprofile/${item.id}`}>View</NavLink>
              </li>
              <li>
                <NavLink to={`../edit/${item.id}`}>edit</NavLink>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};
SendMessage.propTypes = {
  item: PropTypes.object.isRequired,
};
export default SendMessage;
