// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import DashBoardCard from "../../components/dashboard-components/DashBoardCard";
import { Banknote, Handshake } from "lucide-react";

const UserProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch("../../../data/users.json");
        const data = await response.json();
        const filteredStudent = data.find(
          (student) => student.id === parseInt(id)
        );
        setStudent(filteredStudent);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className=" lg:grid-cols-2 lg:grid">
        <div className="mt-6 lg:grid gap-2 md:grid-none md:flex lg:grid-cols-2 w-full lg:justify-between">
          <DashBoardCard title="Total Transactions" percent="34%" icon={<Handshake/>} num="6000" arrow="arrow_upward" cardimg="../../../public/card_graph.png" />
          <DashBoardCard title="Total Payments" percent="34%" icon={<Banknote/>} num="67" arrow="arrow_upward" cardimg="../../../public/card_down_graph.png"/>
        </div>
        {/* Clients profile */}
        <div className="max-w-lg mx-auto w-full bg-white border-r border-l h-full overflow-hidden text-center mt-12 p-6">
          <img
            src={student.img}
            className="rounded-full w-32 h-32 mx-auto"
            alt="profile"
          />
          <div className="text-left mt-6">
            <div className="text-gray-600 flex justify-between items-center text-left  border-b px-2 mt-4">
              <div className="font-bold">Id :</div>
              <div>{student.id}</div>
            </div>

            <div className="text-gray-600 flex justify-between items-center text-left  border-b px-2 mt-4">
              <div className="font-bold">Charge :</div>{" "}
              <div>{student.charge}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left  border-b px-2 mt-4">
              <div className="font-bold">Name :</div> <div>{student.name}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left  border-b px-2 mt-2">
              <div className="font-bold">Contact :</div>{" "}
              <div>{student.contact}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left  border-b px-2 mt-2">
              <div className="font-bold">Email :</div>{" "}
              <div>{student.email}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left  border-b px-2 mt-2">
              <div className="font-bold">Location :</div>{" "}
              <div>{student.location}</div>
            </div>
            <div className="text-gray-600 flex justify-between items-center text-left  border-b px-2 mt-2">
              <div className="font-bold">Charge :</div>{" "}
              <div>{student.charge}</div>
            </div>
          </div>
          <div className="mt-4">
            <NavLink to={`../edit/${student.id}`}>
              <button className=" text-white w-full rounded-sm  bg-black py-2 px-4 text-xl mx-1 hover:bg-gray-700">
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
