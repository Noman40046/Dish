import { useEffect, useState } from "react";
import SendMessage from "./SendMessage";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Search } from "lucide-react";

const UserLoad = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1);   // Track total pages
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Function to fetch all users initially
    const fetchAllUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axiosSecure.get(`/users-with-search?page=${currentPage}&limit=10&search=${searchTerm}`);
        setAllUsersData(response.data.users);
        setTotalPages(response.data.totalPages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      }
    };

    // Fetch all users initially when component mounts
    fetchAllUsers();
  }, [axiosSecure, currentPage]); // Fetch users whenever currentPage changes or axiosSecure changes

  const handleSearchClick = async () => {
    try {
      setIsLoading(true);
      const response = await axiosSecure.get(
        `/users-with-search?page=1&limit=10&search=${searchTerm}`
      );
      setAllUsersData(response.data.users);
      setTotalPages(response.data.totalPages);
      setCurrentPage(1); // Reset current page to 1 after search
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setIsLoading(false);
    }
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
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
              disabled={isLoading} // Disable button during loading
            >
              <Search />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-t rounded-none overflow-visible text-sm client-table-row bg-white px-10 py-4 flex items-start justify-start gap-x-3 font-semibold text-gray-600">
        <div className="text-left">Select</div>
        <div className="text-left">Id</div>
        <div className="text-left">User name</div>
        <div className="text-left">Phone</div>
        <div className="text-left">Bill</div>
      </div>

      <div className="bg-white mt-5 rounded-xl text-sm text-black divide-y divide-indigo-50 overflow-x-auto shadow">
        {/* Display users */}
        {allUsersData.map((item, index) => (
          <SendMessage key={index} item={item} />
        ))}
      </div>

      <div className="join pagination m-4">
        <button className="join-item btn" onClick={handlePreviousPage} disabled={currentPage === 1 || isLoading}>
          « Previous
        </button>
        <button className="join-item btn">{`Page ${currentPage}`}</button>
        <button className="join-item btn" onClick={handleNextPage} disabled={currentPage === totalPages || isLoading}>
          Next »
        </button>
      </div>
    </section>
  );
};

export default UserLoad;
