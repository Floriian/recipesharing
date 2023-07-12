import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { ProfileMenu } from "./ProfileMenu";
import { AuthMenu } from "./AuthMenu";

export function Menu() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      {user?.address} {isAuthenticated}
    </div>
  );
}
