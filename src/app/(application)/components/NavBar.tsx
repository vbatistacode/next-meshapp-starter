import React from "react";
import NavMenu from "./NavMenu";
import NavStatus from "./NavStatus";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-16">
      <h1>Title</h1>
      <NavMenu />
      <NavStatus />
    </div>
  );
};

export default NavBar;
