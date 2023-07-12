import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { ProfileMenu } from "./ProfileMenu";
import { AuthMenu } from "./AuthMenu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";

export function Menu() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleGlutenFreeClick = () => {
    navigate("/recipes/glutenfree");
  };
  const handleAllClick = () => {
    navigate("/recipes");
  };

  return (
    <nav className="flex w-full justify-end">
      <div className="flex w-[50vw] justify-between items-center p-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Recipes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
                  <li
                    onClick={handleAllClick}
                    className="cursor-pointer hover:bg-secondary rounded-sm"
                  >
                    All
                  </li>
                  <li
                    onClick={handleGlutenFreeClick}
                    className="cursor-pointer hover:bg-secondary rounded-sm"
                  >
                    Gluten-Free
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {isAuthenticated ? <ProfileMenu /> : <AuthMenu />}
      </div>
    </nav>
  );
}
