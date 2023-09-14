"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href="#"
            legacyBehavior
            passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Item 1
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="#"
            legacyBehavior
            passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Item 2
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="#"
            legacyBehavior
            passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Item 3
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
