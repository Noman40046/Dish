import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import DashBoardCard from "../../components/dashboard-components/DashBoardCard";
import { Banknote, Handshake, PencilLine } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="lg:grid-cols-2 lg:grid">
        <div>
          <div className="lg:grid gap-2 md:grid-none md:flex lg:grid-cols-2 w-full lg:justify-between">
            <DashBoardCard
              title="Total Payments"
              percent="34%"
              icon={<Handshake />}
              num={user.totalPayments}
              arrow="arrow_upward"
              cardimg="https://i.postimg.cc/Pq1Q4W1n/card-down-graph.png"
            />
            <DashBoardCard
              title="Number of Payments"
              percent="34%"
              icon={<Banknote />}
              num={user.payments.length}
              arrow="arrow_upward"
              cardimg="https://i.postimg.cc/9MVtNDBR/card-graph.png"
            />
          </div>
          {/* Table start */}
          <div className="overflow-x-auto mt-8 border p-8 rounded-xl">
            <div className="mb-4">
              <div className="text-2xl text-black font-bold">Transactions</div>
              <div className="text-[14px] font-semibold text-gray-500">
                All Transactions
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Transaction Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {user.payments && user.payments.length > 0 ? (
                  user.payments.map((payment, index) => (
                    <tr key={index}>
                      <td>
                        <div>{formatDate(payment.date)}</div>
                      </td>
                      <td>{payment.amount}</td>
                      <td>{payment.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center font-bold">No Payments yet</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Table end */}
        </div>

        {/* Client's profile */}
        <div className="max-w-lg mx-auto w-full bg-white border h-full overflow-hidden text-center rounded-xl p-6">
          <img
            src="https://i.postimg.cc/g0Y988sm/user-min.png"
            className="rounded-full w-32 h-32 mx-auto"
            alt="profile"
          />
          <div className="text-left mt-6 text-sm">
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Id :</div>
              <div>{user.id}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Bill :</div>
              <div>{user.bill}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Name :</div>
              <div>{user.name}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
              <div className="font-semibold">Phone :</div>
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
          </div>
          <div className="mt-4">
            <NavLink to={`../edit/${id}`}>
              <button className="text-white w-full btn bg-black btn-sm hover:bg-gray-700">
                <PencilLine/>
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
