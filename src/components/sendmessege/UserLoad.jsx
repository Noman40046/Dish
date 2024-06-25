import { useEffect, useState } from "react";
import SendMessage from "./SendMessage";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Search } from "lucide-react";
const UserLoad = () => {
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
      {/* <div className="flex items-center py-4 px-4 justify-between w-full flex-wrap">
        <div className="font-bold text-lg text-black">All User</div>
        <div className="font-bold text-lg text-black">
        </div>
      </div> */}
      <div className="border-b border-t rounded-noneoverflow-visible text-sm client-table-row bg-white px-10 py-4 flex items-start justify-start gap-x-3 font-semibold text-gray-600">
        <div className="text-left">Select</div>
        <div className="text-left">Id</div>
        <div className="text-left">User name</div>
        <div className="text-left">Phone</div>
        <div className="text-left">Bill</div>
      </div>

      <div className="bg-white mt-5 rounded-xl text-sm text-black divide-y divide-indigo-50 overflow-x-auto shadow">
        {/* users Data Show */}
        {allUsersData.map((item, index) => (
          <SendMessage key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default UserLoad;
