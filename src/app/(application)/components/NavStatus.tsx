import React from "react";
import UserMenu from "./UserMenu";

const NavStatus = () => {
  return (
    <div className="flex space-x-4">
      <div className="text-sm m-auto">Market Open</div>
      <UserMenu />
    </div>
  );
};

export default NavStatus;
