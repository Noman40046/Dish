// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Banknote, Handshake, PencilIcon } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import DashBoardCard from "../../components/dashboard-components/DashBoardCard";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/users/${id}`)
      .then((result) => {
        console.log(result.data.user);
        setUser(result.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, axiosSecure]);

  if (!user) {
    return <div>Loading...</div>; // Show a loading state while user data is being fetched
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className=" lg:grid-cols-2 lg:grid">
        <div>
          <div className="lg:grid gap-2 md:grid-none md:flex lg:grid-cols-2 w-full lg:justify-between">
            <DashBoardCard
              title="Total Transactions"
              percent="34%"
              icon={<Handshake />}
              num="6000"
              arrow="arrow_upward"
              cardimg="https://i.postimg.cc/Pq1Q4W1n/card-down-graph.png"
            />
            <DashBoardCard
              title="Total Payments"
              percent="34%"
              icon={<Banknote />}
              num="67"
              arrow="arrow_upward"
              cardimg="https://i.postimg.cc/9MVtNDBR/card-graph.png"
            />
          </div>
          {/* Table start */}
          <div className="overflow-x-auto mt-8 mb-4 border p-8 rounded-xl">
            <div className="mb-4">
              <div className=" text-2xl text-black font-bold">Transactions</div>
              <div className="text-[14px] font-semibold text-gray-500">
                All Transactions
              </div>
            </div>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Transaction Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                <tr>
                  <td>
                    <div className="font-bold">Connection Fee</div>
                    <div>Jun 03, 2024</div>
                  </td>
                  <td>500</td>
                </tr>
                <tr className="hover">
                  <td>
                    <div className="font-bold">Monthly Fee</div>
                    <div>Jun 05, 2024</div>
                  </td>
                  <td>600</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Table end */}
        </div>

        {/* Clients profile */}
        <div className="max-w-lg mx-auto w-full bg-white border h-full overflow-hidden text-center rounded-xl p-6">
          <img
            src="https://i.postimg.cc/g0Y988sm/user-min.png"
            className="rounded-full w-32 h-32 mx-auto border"
            alt="profile"
          />
          <div className="text-left mt-6 text-sm">
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Id :</div>
              <div>{user.id}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Charge :</div>
              <div>{user.bill}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Name :</div>
              <div>{user.name}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Contact :</div>
              <div>{user.phone}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Email :</div>
              <div>{user.email}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Location :</div>
              <div>{user.location}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2">
              <div className="font-semibold">Charge :</div>
              <div>{user.bill}</div>
            </div>
          </div>
          <div className="mt-4">
            <NavLink to={`../edit/${id}`}>
              <button className=" text-white w-full btn bg-black btn-sm hover:bg-gray-700">
                <PencilIcon />
                Edit
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
