import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { profileMenuRoutes } from "../../utils";
import { To, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PersonIcon } from "@radix-ui/react-icons";
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
        <Avatar>
          <AvatarImage src={user?.picture} />
          <AvatarFallback>
            <PersonIcon />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          {profileMenuRoutes.map((item, i) => (
            <DropdownMenuItem key={i} onClick={() => gotoPage(item.path)}>
              {item.text}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
