import{ useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserUpdate = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  // State variables to hold form data
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [charge, setCharge] = useState("");
  const [location, setLocation] = useState("");

  // State for file input
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  // Fetch student data on component mount
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch("../../../data/users.json");
        const data = await response.json();
        const filteredStudent = data.find(
          (student) => student.id === parseInt(id)
        );
        setStudent(filteredStudent);

        // Set form input values based on fetched data
        if (filteredStudent) {
          setFullName(filteredStudent.name);
          setEmail(filteredStudent.email);
          setPhone(filteredStudent.contact);
          setCharge(filteredStudent.charge);
          setLocation(filteredStudent.location);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    // Handle update logic here
    // You can implement your update API call or logic
    // For simplicity, we're just logging the form data here
    console.log({
      fullName,
      email,
      phone,
      charge,
      location,
      selectedFile,
    });
  };

  if (!student) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4 sm:ml-64">
      <div className="container mx-auto mt-10 p-4">
        <div className="flex user-update-flexbox">
          {/* Update form */}
          <div className="w-full md:w-3/4 px-4 userupdateform">
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
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="charge" className="block text-gray-700">
                        Charge
                      </label>
                      <input
                        type="text"
                        className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                        id="charge"
                        placeholder="Enter Charge Amount"
                        value={charge}
                        onChange={(e) => setCharge(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="location" className="block text-gray-700">
                        Location
                      </label>
                      <input
                        type="text"
                        className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                        id="location"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <div className="form-group">
                      <div className="">
                        <label htmlFor="drop-zone">
                          <div className="h-[100px]  flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                          <input
                              className="hidden"
                              id="drop-zone"
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                            <img
                              id="logo"
                              className="h-[70px] rounded-lg"
                              src={previewImage || student.img}
                              alt="Upload Preview"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Link to={`../dashboard/userprofile/${student.id}`}>
                    <button className="btn mr-2 bg-black hover:bg-gray-600  text-white  px-4 py-2 rounded-lg">
                      Cancel
                    </button>
                  </Link>
                  <button
                    className="btn  px-4 py-2  hover:bg-red-400 bg-rose-500  text-white rounded-lg"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* user profile */}
          <div className="w-[50%] px-4 py-4 mb-4 md:mb-0 bg-white border userupdateprofile rounded-lg">
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
                <div className="font-bold">Name :</div>{" "}
                <div>{student.name}</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
