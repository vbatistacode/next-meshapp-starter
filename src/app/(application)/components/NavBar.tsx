import React from "react";
import NavMenu from "./NavMenu";
import NavStatus from "./NavStatus";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-16">
      <h1 className="text-3xl">Mesh App</h1>
      <NavMenu />
      <NavStatus />
    </nav>
  );
};

export default NavBar;
