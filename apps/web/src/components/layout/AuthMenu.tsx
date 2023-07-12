import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { PersonIcon } from "@radix-ui/react-icons";

export function AuthMenu() {
  const { loginWithRedirect } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>
            <PersonIcon />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => loginWithRedirect()}
          >
            Sign In
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">
            Sign Up
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
