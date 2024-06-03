// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const UserUpdate = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-undef
  const [student, setStudent] = useState(null);

  // eslint-disable-next-line no-undef
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
      <div className="container mx-auto mt-10 p-4">
        <div className="flex user-update-flexbox ">
          <div className="w-full  md:w-3/4 px-4 userupdateform">
            <div className="bg-white border rounded-lg overflow-hidden h-full">
              <div className="p-4">
                <div className="mb-4">
                  <h6 className="text-xl font-semibold text-black">
                    Edit User Information
                  </h6>
                </div>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="fullName" className="block text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                        id="fullName"
                        placeholder="Enter full name"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="eMail" className="block text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                        id="eMail"
                        placeholder="Enter email ID"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="phone" className="block text-gray-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="phone" className="block text-gray-700">
                        Charge
                      </label>
                      <input
                        type="text"
                        className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                        id="phone"
                        placeholder="Enter Charge Ammount"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="website" className="block text-gray-700">
                        Location
                      </label>
                      <input
                        type="text"
                        className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                        id="location"
                        placeholder="Location"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <div className="form-group">
                      <div className="">
                        <label htmlFor="drop-zone">
                          <div className="h-[100px]  flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <input
                              className="hidden"
                              id="drop-zone"
                              type="file"
                              accept="image/*"
                            />
                            <img
                              id="logo"
                              className="h-[70px]"
                              src="https://i.postimg.cc/rF77ZXQj/image.png"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Link to={`../userprofile/${student.id}`}>
                    <button className="btn mr-2 bg-black hover:bg-gray-600  text-white  px-4 py-2 rounded-lg">
                      Cancel
                    </button>
                  </Link>
                  <button className="btn  px-4 py-2  hover:bg-red-400 bg-rose-500  text-white rounded-lg">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit  md:w-1/4 px-4 py-4 mb-4 md:mb-0 bg-white border userupdateprofile rounded-lg">
            <img
              src={student.img}
              className="rounded-full w-32 h-32 mx-auto"
              alt="profile"
            />

            <div className="text-left mt-6">
              <p className="text-gray-600 mt-4">
                <strong>Id :</strong> <span className="ml-2">{student.id}</span>
              </p>
              <p className="text-gray-600 mt-4">
                <strong>Charge :</strong>{" "}
                <span className="ml-2">{student.charge}</span>
              </p>
              <p className="text-gray-600 mt-4">
                <strong>Name :</strong>{" "}
                <span className="ml-2">{student.name}</span>
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Mobile :</strong>{" "}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
