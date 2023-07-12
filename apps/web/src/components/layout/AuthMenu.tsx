import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { useAuth0 } from "@auth0/auth0-react";

export function AuthMenu() {
  const { loginWithRedirect } = useAuth0();

  const onSignInButtonClick = async () => {
    await loginWithRedirect();
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="DropdownMenuTrigger">
        <PersonIcon width={32} height={32} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5} className="DropdownMenuContent">
          <DropdownMenu.Item
            className="DropdownMenuItem"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => onSignInButtonClick()}
          >
            Sign in
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Sign up
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
