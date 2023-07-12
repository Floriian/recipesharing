import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { ProfileMenu } from "./ProfileMenu";
import { AuthMenu } from "./AuthMenu";

export function Menu() {
  const { isAuthenticated } = useAuth0();
  return <div>{isAuthenticated ? <ProfileMenu /> : <AuthMenu />}</div>;
}
