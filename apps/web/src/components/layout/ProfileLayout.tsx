import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ProfileCards } from "./ProfileCards";

export function ProfileLayout() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="flex gap-4 w-full justify-center">
      <ProfileCards />
      <Outlet />
    </div>
  );
}
