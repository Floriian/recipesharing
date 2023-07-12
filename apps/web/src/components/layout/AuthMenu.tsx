import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function AuthMenu() {
  const { loginWithRedirect } = useAuth0();

  const onSignInButtonClick = async () => {
    await loginWithRedirect();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>PERSON</DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem>Sign In</DropdownMenuItem>
          <DropdownMenuItem>Sign Up</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
