import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { profileMenuRoutes } from "../../utils";
import { To, useNavigate } from "react-router-dom";

export function ProfileMenu() {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const gotoPage = (path?: string) => {
    if (!path) return;
    navigate(path as To);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="DropdownMenuTrigger">
        <Avatar.Root className="h-8 w-8 ">
          <Avatar.Image
            alt={user?.name}
            src={user?.picture}
            className="rounded-full object-cover h-8 w-8"
          />
        </Avatar.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent">
          {profileMenuRoutes.map((item, i) => (
            <DropdownMenu.Item
              className="DropdownMenuItem"
              key={i}
              onClick={() => gotoPage(item.path)}
            >
              {item.text}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="DropdownMenuSeperator" />
          <DropdownMenu.Item className="DropdownMenuItem">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
