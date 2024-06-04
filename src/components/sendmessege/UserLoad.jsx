
import { useEffect, useState } from "react";
import SendMessage from "./SendMessage";
const UserLoad = () => {
  const [allUsersData, setAllUsersData] = useState([]);



  useEffect(() => {
    // Fetch user data from the server
    fetch("../../../data/users.json")
      .then((response) => response.json())
      .then((data) => {
        setAllUsersData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <section className="border rounded-lg">
      <div className="flex items-center py-4 px-4 justify-between w-full flex-wrap">
        <div className="font-bold text-lg text-black">All User</div>
        <div className="font-bold text-lg text-black">
        </div>
      </div>
      <div className="border-b border-t rounded-noneoverflow-visible text-sm client-table-row bg-white px-10 py-4 flex items-start justify-start gap-x-3 font-semibold text-gray-600">
        <div className="text-left">Select</div>
        <div className="text-left">Id</div>
        <div className="text-left">User name</div>
        <div className="text-left">Contact</div>
        <div className="text-left">Charge</div>
      </div>

      <div className="bg-white mt-5 rounded-xl text-sm text-black divide-y divide-indigo-50 overflow-x-auto shadow">
        {/* users Data Show */}
        {allUsersData.map((item, index) => (
          <SendMessage key={index} item={item}/>
        ))}
      </div>
    </section>
  );
};

export default UserLoad;
