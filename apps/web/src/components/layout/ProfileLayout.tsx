import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProfileLayout() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <div>
      profile layout
      <Outlet />
    </div>
  );
}
