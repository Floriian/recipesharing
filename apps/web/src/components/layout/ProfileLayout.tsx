import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ProfileSideMenu } from "./ProfileSideMenu";

export function ProfileLayout() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="flex">
      <ProfileSideMenu />
      <Outlet />
    </div>
  );
}
