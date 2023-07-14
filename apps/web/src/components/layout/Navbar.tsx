import { AuthenticatedMenu } from "@/components/layout/AuthenticatedMenu";
import { GuestMenu } from "@/components/layout/GuestMenu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="flex w-full justify-between p-2">
      <div>LOGO</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Recipes</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-96 gap-3 p-4 md:grid-cols:1">
                <li className="cursor-pointer hover:bg-secondary rounded-sm p-4">
                  <Link to="/recipes">All</Link>
                </li>
                <li className="cursor-pointer hover:bg-secondary rounded-sm p-4">
                  <Link to="/recipes/gluten-free">Gluten-Free</Link>
                </li>
                <Separator />
                <li className="cursor-pointer hover:bg-secondary rounded-sm p-4">
                  <Link to="/recipes/my-recipes">My recipes</Link>
                </li>
                <li className="cursor-pointer hover:bg-secondary rounded-sm p-4">
                  <Link to="/recipes/saved-recipes">Saved Recipes</Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {isAuthenticated ? <AuthenticatedMenu /> : <GuestMenu />}
    </nav>
  );
}
