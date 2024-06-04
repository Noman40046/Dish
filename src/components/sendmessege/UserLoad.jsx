// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import UserLoad from "./UserLoad";

const SendMessage = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the server
    fetch("../../../data/users.json")
      .then((response) => response.json())
      .then((data) => {
        setAllUsersData(data);
        setFilteredUsers(data); // Initially set filtered users to all users
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Filter users whenever searchTerm changes
    const filtered = allUsersData.filter((user) =>
      user.id.toString().includes(searchTerm)
    );
    setFilteredUsers(filtered);
  }, [searchTerm, allUsersData]);

  return (
    <section className="border rounded-lg">
      <div className="flex items-center py-4 px-4 justify-between w-full flex-wrap">
        <div className="font-bold text-lg text-black">All User</div>
        <div className="font-bold text-lg text-black">
          <div className="flex items-center gap-2 text-black text-sm font-semibold">
            <div>
              <input
                className="shadow-lg border pl-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="client"
                name="client"
                type="text"
                placeholder="Enter User Id"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="btn bg-black text-white" onClick={() => setSearchTerm("")}>
              <span>Clear Search</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-t rounded-noneoverflow-visible text-sm client-table-row bg-white px-10 py-4 flex items-start justify-start gap-x-3 font-semibold text-gray-600">
        <div className="text-left">Id</div>
        <div className="text-left">User name</div>
        <div className="text-left">Contact</div>
        <div className="text-left">Charge</div>
        <div className="text-left">Action</div>
      </div>

      <div className="bg-white mt-5 rounded-xl text-sm text-black divide-y divide-indigo-50 overflow-x-auto shadow">
        {/* users Data Show */}
        {filteredUsers.map((item, index) => (
          <UserLoad key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SendMessage;
