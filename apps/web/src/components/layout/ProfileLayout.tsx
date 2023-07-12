import React from "react";
import { Outlet } from "react-router-dom";

export function ProfileLayout() {
  return (
    <div>
      profile layout
      <Outlet />
    </div>
  );
}
