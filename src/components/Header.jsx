// eslint-disable-next-line no-unused-vars
import React from "react";

import Sidebar from "./Sidebar";
import Mainheader from "./Mainheader";

const Header = () => {
  return (
    <div className="sticky top-0 z-40">
     {/* --Nav bar-- */}
      <Mainheader/>
      {/* --sidebar-- */}
      <Sidebar/>
    </div>
  );
};
export default Header;
