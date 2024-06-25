import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddUser = () => {
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data = {...data, bill: parseInt(data.bill)}
    console.log(data)
    toast.promise(axiosSecure.post("/user", data), {
      loading: "Creating...",
      success: "Contest created successfully",
      error: "Something went wrong",
    });
  };


  return (
    <div className="p-4 sm:ml-64">
      <div className="w-full  md:w-3/4 px-4 userupdateform">
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
                      className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
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
                      className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
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
                      className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
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
                      type="text"
                      className="border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                      id="bill"
                      name="bill"
                      {...register("bill")}
                      placeholder="Enter Charge Amount"
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
                      name="location"
                      {...register("location")}
                      placeholder="Location"
                    />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Link to="/dashboard">
                  <button className="btn mr-2 bg-black hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                    Cancel
                  </button>
                </Link>
                <button type="submit" className="btn px-4 py-2 hover:bg-red-400 bg-rose-500 text-white rounded-lg">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
