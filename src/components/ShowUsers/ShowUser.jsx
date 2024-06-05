// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import { Search } from "lucide-react";

const ShowUser = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the server
    fetch("./data/users.json")
      .then((response) => response.json())
      .then((data) => {
        setAllUsersData(data);
        setFilteredUsers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = () => {
    const filtered = allUsersData.filter((user) =>
      user.id.toString().includes(searchTerm)
    );
    setFilteredUsers(filtered);
  };

  return (
    <section className="border rounded-lg">
      <div className="flex items-center py-4 px-4 justify-between w-full flex-wrap">
        <div className="font-bold text-lg text-black">All Users</div>
        <div className="font-bold text-lg text-black">
          <div className="flex items-center gap-2 text-black text-sm font-semibold">
            <div>
              <input
                className="border pl-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="client"
                name="client"
                type="text"
                placeholder="Enter User Id"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div
              className="btn bg-black text-white flex"
              onClick={handleSearch}
            >
              <Search />
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Charge</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* users Data Show */}
          {filteredUsers.map((item, index) => (
            <SingleUser key={index} item={item} />
          ))}
        </table>
      </div>
    </section>
  );
};

export default ShowUser;
