import React from "react";
import { profileSideMenuRoutes } from "../../utils/ProfileSideMenuRoutes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useLocation, useRoutes } from "react-router-dom";
export function ProfileSideMenu() {
  const { pathname } = useLocation();

  return (
    <aside className="bg-green-700 w-36 text-white text-xl h-[calc(100vh-3.5rem)] shadow drop-shadow-lg mr-2">
      <ul className="flex flex-col">
        {profileSideMenuRoutes.map((item, i) => (
          <li
            key={i}
            className="hover:bg-green-500 w-full text-center h-[100vw - 5rem] cursor-pointer hover:text-black"
          >
            <div>{item.text}</div>
            <DropdownMenu.Separator className="DropdownMenuSeperator border-" />
          </li>
        ))}
      </ul>
    </aside>
  );
}