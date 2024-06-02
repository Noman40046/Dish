// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useParams } from "react-router-dom";
const UserProfile = () => {
    const id = useParams()
    console.log(id);
    return (
        <div>
            <div className="max-w-lg mx-auto bg-white border-r border-l h-full overflow-hidden text-center mt-12 p-6">
                <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    className="rounded-full w-32 h-32 mx-auto"
                    alt="profile"
                />


                <div className="mt-4">
                    <button className="bg-black text-white  py-2 px-4 rounded-full mx-1 hover:bg-gray-600">
                        <Link to="../edit">Edit</Link>
                    </button>

                </div>

                <div className="text-left mt-6">
                    <p className="text-gray-600 mt-4">
                        <strong>Id :</strong>{" "}
                        <span className="ml-2">12</span>
                    </p>
                    <p className="text-gray-600 mt-4">
                        <strong>Name :</strong>{" "}
                        <span className="ml-2">Touhidul</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                        <strong>Mobile :</strong>{" "}
                        <span className="ml-2">+8801518999578</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                        <strong>Email :</strong>{" "}
                        <span className="ml-2">user@gmail.com</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                        <strong>Location :</strong> <span className="ml-2">Shalbon Mistri para</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;