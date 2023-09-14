import React from "react";
import UserMenu from "./UserMenu";

const NavStatus = () => {
  return (
    <div className="flex space-x-2">
      <div className="text-sm">Market Open</div>
      <UserMenu />
    </div>
  );
};

export default NavStatus;
