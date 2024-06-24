import { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import { Search } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ShowUser = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredUsers, setFilteredUsers] = useState([]);
  const axiosSecure= useAxiosSecure()

  useEffect(() => {
   axiosSecure.get('/users')
   .then(result=> {
   // console.log(result.data.users)
    setAllUsersData(result.data.users)
   })
   .catch(err=> {
    console.log(err)
   })
  }, []);
console.log(allUsersData)


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
              // onClick={handleSearch}
            >
              <Search />
              <span>Search</span>
            </div>
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
