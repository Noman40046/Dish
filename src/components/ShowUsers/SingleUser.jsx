import PropTypes from 'prop-types';
import { Edit, EyeIcon, Trash } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SingleUser = ({ item, handleDeleteUser }) => {
  return (
    <tr>
      <th>{item.id}</th>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.bill}</td>
      <td className="hidden lg:block">
        <div className="flex gap-2">
          <NavLink to={`/dashboard/userprofile/${item.id}`}>
            <button className="btn btn-sm bg-black text-white flex gap-1">
              <EyeIcon size={15} /> View
            </button>
          </NavLink>
          <NavLink to={`../edit/${item.id}`}>
            <button className="btn btn-sm bg-black text-white flex gap-1">
              <Edit size={15} />
              Edit
            </button>
          </NavLink>
          <button
            className="btn btn-sm btn-error flex gap-1 text-white"
            onClick={() => handleDeleteUser(item.id)}
          >
            <Trash size={15} /> Delete
          </button>
        </div>
      </td>
      <td className="block lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className="cursor-pointer hover:text-blue-900 font-bold text-lg">
              ....
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <NavLink to={`/dashboard/userprofile/${item.id}`}>View</NavLink>
            </li>
            <li>
              <NavLink to={`../edit/${item.id}`}>Edit</NavLink>
            </li>
            <li>
              <button onClick={() => handleDeleteUser(item.id)}>Delete</button>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

// Define PropTypes for SingleUser component
SingleUser.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    bill: PropTypes.number.isRequired,
    // Add more PropTypes as per your item structure
  }).isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};

export default SingleUser;
