import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { profileMenuRoutes } from "../../utils";
import { To, useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function ProfileMenu() {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const gotoPage = (path?: string) => {
    if (!path) return;
    navigate(path as To);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {/* <Avatar.Root className="h-8 w-8 ">
          <Avatar.Image
            alt={user?.name}
            src={user?.picture}
            className="rounded-full object-cover h-8 w-8"
          />
        </Avatar.Root> */}
        Avataaar
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          {profileMenuRoutes.map((item, i) => (
            <DropdownMenuItem
              key={i}
              onClick={() => gotoPage(item.path)}
            >
              {item.text}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
