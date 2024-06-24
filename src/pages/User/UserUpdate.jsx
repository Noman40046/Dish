import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const UserUpdate = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    axiosSecure
      .get(`/users/${id}`)
      .then((result) => {
        setUser(result.data.user);
        // Prefill form fields with existing user data
        setValue("name", result.data.user.name);
        setValue("email", result.data.user.email);
        setValue("phone", result.data.user.phone);
        setValue("bill", result.data.user.bill.toString()); // Ensure bill is a string
        setValue("location", result.data.user.location);
      })
      .catch((err) => {
        console.error("Error fetching user:", err); // Log fetch error
        toast.error("Failed to fetch user data");
      });
  }, [id, axiosSecure, setValue]);

  const onSubmit = (data) => {
    // Convert bill back to integer if needed
    data = { ...data, bill: parseInt(data.bill) };
    axiosSecure
      .put(`/users/${id}`, data)
      .then((response) => {
        toast.success("User updated successfully");
        console.log("User updated successfully", response);
        setUser(data)
      })
      .catch((error) => {
        toast.error("Failed to update user");
        console.error("Error updating user:", error); // Log update error
      });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="container mx-auto mt-10 p-4">
        <div className="flex user-update-flexbox">
          <div className="w-full md:w-3/4 px-4 userupdateform">
            <div className="bg-white border rounded-lg overflow-hidden h-full">
              <div className="p-4">
                <div className="mb-4">
                  <h6 className="text-xl font-semibold text-black">
                    Edit User Information
                  </h6>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <div className="form-group">
                        <label htmlFor="name" className="block text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                          id="name"
                          name="name"
                          placeholder="Enter full name"
                          {...register("name")}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <div className="form-group">
                        <label htmlFor="email" className="block text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                          id="email"
                          name="email"
                          {...register("email")}
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
                          className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                          id="phone"
                          name="phone"
                          {...register("phone")}
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <div className="form-group">
                        <label htmlFor="bill" className="block text-gray-700">
                          Bill
                        </label>
                        <input
                          type="number"
                          className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                          id="bill"
                          name="bill"
                          {...register("bill")}
                          placeholder="Enter Charge Amount"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <div className="form-group">
                        <label
                          htmlFor="location"
                          className="block text-gray-700"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                          id="location"
                          name="location"
                          {...register("location")}
                          placeholder="Location"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <div className="form-group">
                        <div className="">
                          <label htmlFor="drop-zone">
                            <div className="h-[100px] flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                              <input
                                className="hidden"
                                id="drop-zone"
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                              />
                              {selectedImage ? (
                                <img
                                  id="logo"
                                  className="h-[70px]"
                                  src={selectedImage}
                                  alt="Selected"
                                />
                              ) : (
                                <img
                                  id="logo"
                                  className="h-[70px]"
                                  src="https://i.postimg.cc/rF77ZXQj/image.png"
                                  alt="Default"
                                />
                              )}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Link to="/dashboard">
                      <button className="btn mr-2 bg-black hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                        Cancel
                      </button>
                    </Link>
                    <button
                      type="submit"
                      className="btn px-4 py-2 hover:bg-red-400 bg-rose-500 text-white rounded-lg"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* User Profile---------- */}

          <div className="max-w-lg mx-auto w-full bg-white border h-full overflow-hidden text-center rounded-xl p-6">
            <img
              src={user.photoURL}
              className="rounded-full w-32 h-32 mx-auto border"
              alt="profile"
            />
            <div className="text-left mt-6 text-sm">
              <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
                <div className="font-semibold">Id :</div>
                <div>{user.id}</div>
              </div>
              <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
                <div className="font-semibold">Charge :</div>
                <div>{user.bill}</div>
              </div>
              <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
                <div className="font-semibold">Name :</div>
                <div>{user.name}</div>
              </div>
              <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
                <div className="font-semibold">Contact :</div>
                <div>{user.phone}</div>
              </div>
              <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
                <div className="font-semibold">Email :</div>
                <div>{user.email}</div>
              </div>
              <div className="text-gray-600 flex justify-between items-center text-left border-b px-2 mt-2 pb-1">
                <div className="font-semibold">Location :</div>
                <div>{user.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
