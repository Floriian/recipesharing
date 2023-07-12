import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { ProfileMenu } from "./ProfileMenu";
import { AuthMenu } from "./AuthMenu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Link } from "react-router-dom";

export function Menu() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="flex w-full justify-end">
      <div className="flex w-[50vw] justify-between items-center p-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/">Homepage</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {isAuthenticated ? <ProfileMenu /> : <AuthMenu />}
      </div>
    </nav>
  );
}
