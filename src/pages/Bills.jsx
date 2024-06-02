// eslint-disable-next-line no-unused-vars
import React from "react";
import ShowUser from "../components/ShowUsers/ShowUser";
import SetBIll from "../components/billcomponents/SetBIll";

const Bills = () => {

  return (
    <div className="p-4 sm:ml-64">
      <main className=" w-full px-3 sm:px-10">
        <SetBIll/>
        
        {/* Users Data */}
        <ShowUser/>
      </main>
    </div>
  );
};

export default Bills;
