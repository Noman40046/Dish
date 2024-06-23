// eslint-disable-next-line no-unused-vars
import React from "react";
import UserLoad from "../components/sendmessege/UserLoad";
import {SendHorizontal } from "lucide-react";

const Message = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="font-semibold text-lg text-black mb-2">
        Send Messege
      </div>
      <form>
      <div className="flex flex-col w-full text-black text-sm space-y-2 font-semibold text-left">
            <div className="inline-flex  ">
              <input
                className="border pl-4 pr-4 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                id="billid"
                name="billid"
                type="text"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
        <div className="flex gap-4 flex-col items-start py-2 rounded-lg ">
          <textarea
            id="chat"
            rows="1"
            className="h-32 block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Your message..."
          ></textarea>
          <div className="btn bg-black hover:bg-[#313131] text-white text-left">
            <span className="flex gap-1 justify-center items-center"><SendHorizontal size={18}/>Send</span>
          </div>
        </div>
      </form>
      <UserLoad/>
    </div>
  );
};

export default Message;
