/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Edit, EyeIcon, Trash } from "lucide-react";
import { NavLink } from "react-router-dom";

const SingleUser = ({ item }) => {
  return (
    <tbody>
      <tr>
        <th>{item.id}</th>
        <td>{item.name}</td>
        <td>{item.contact}</td>
        <td>{item.charge}</td>
        <td className="hidden lg:block">
          <div className="flex gap-2">
            <button className="btn btn-sm bg-black text-white">
              <NavLink className="flex gap-1" to={`/dashboard/userprofile/${item.id}`}><EyeIcon size={15}/> View</NavLink>
            </button>
            <button className="btn btn-sm bg-black text-white">
              <NavLink  className="flex gap-1" to={`../edit/${item.id}`}><Edit size={15}/> Edit</NavLink>
            </button>
            <button className="btn btn-sm btn-error flex gap-1 text-white"><Trash size={15}/> Delete</button>
          </div>
        </td>
        <td className="block lg:hidden">
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
                <NavLink to={`../edit/${item.id}`}>Edit</NavLink>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
    /*  <div>
      <div
        key={item.id}
        className="client-table-row flex items-start justify-start  py-4"
      >
        <div className="text-left ml-4">{item.id}</div>
        <div className="text-left">{item.name}</div>
        <div className="text-left hidden lg:block">{item.contact}</div>
        <div className="text-left">{item.charge} ৳</div>
        <div className="text-left hidden lg:block">
          <div className="flex gap-2 ">
            <button className="btn btn-sm bg-black text-white">
              <NavLink to={`/dashboard/userprofile/${item.id}`}>View</NavLink>
            </button>
            <button className="btn btn-sm bg-black text-white">
              <NavLink to={`../edit/${item.id}`}>Edit</NavLink>
            </button>
            <button className="btn btn-sm btn-error text-white">Delete</button>
          </div>
        </div>
        <div className="text-left lg:hidden block">
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
                <NavLink to={`../edit/${item.id}`}>Edit</NavLink>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> */
  );
};

export default SingleUser;
