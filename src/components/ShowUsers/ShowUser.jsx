import { useState, useEffect } from "react";
import SingleUser from "./SingleUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Search } from "lucide-react";

const ShowUser = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Function to fetch all users initially
    const fetchAllUsers = async () => {
      try {
        const response = await axiosSecure.get("/users");
        setAllUsersData(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Fetch all users initially when component mounts
    fetchAllUsers();
  }, [axiosSecure]); // Only fetch all users when axiosSecure changes (if necessary)

  const handleSearchClick = async () => {
    try {
      if (searchTerm.trim() !== "") {
        const response = await axiosSecure.get(
          `/users-with-search?page=1&limit=10&search=${searchTerm}`
        );
        setAllUsersData(response.data.users);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
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
            <button
              onClick={handleSearchClick}
              className="btn bg-black text-white flex"
            >
              <Search />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <table className="table">
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
          {allUsersData.map((item, index) => (
            <SingleUser key={index} item={item} />
          ))}
        </table>
      </div>
    </section>
  );
};

export default ShowUser;
