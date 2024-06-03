// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

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
    <div>
      <div className="max-w-lg mx-auto bg-white border-r border-l h-full overflow-hidden text-center mt-12 p-6">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar7.png"
          className="rounded-full w-32 h-32 mx-auto"
          alt="profile"
        />
        <div className="mt-4">
          <button className="bg-black text-white py-2 px-4 rounded-full mx-1 hover:bg-gray-600">
            <NavLink to={`../edit/${student.id}`}>edit</NavLink>
          </button>
        </div>
        <div className="text-left mt-6">
          <p className="text-gray-600 mt-4">
            <strong>Id :</strong> <span className="ml-2">{student.id}</span>
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Name :</strong> <span className="ml-2">{student.name}</span>
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Contact :</strong>{" "}
            <span className="ml-2">{student.contact}</span>
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email :</strong>{" "}
            <span className="ml-2">{student.email}</span>
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Location :</strong>{" "}
            <span className="ml-2">{student.location}</span>
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Charge :</strong>{" "}
            <span className="ml-2">{student.charge}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
