"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserAuth } from "@/lib/auth/utils";
import { capitalizeString, getInitials } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import React from "react";

const UserMenu = () => {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setOppositeTheme("light");
    } else {
      setTheme("light");
      setOppositeTheme("dark");
    }
  };
  const [oppositeTheme, setOppositeTheme] = React.useState(
    theme === "light" ? "dark" : "light"
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar>
          <AvatarImage src={session?.user.image ? session?.user.image : ""} />
          <AvatarFallback>{getInitials(session?.user.name)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={toggleTheme}>
          {`${capitalizeString(oppositeTheme)} Mode`}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-destructive bg-destructive-foreground focus:bg-destructive focus:text-destructive-foreground"
          onClick={() => signOut()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
