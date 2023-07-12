import React from "react";
import { Outlet } from "react-router-dom";
export function Layout() {
  return (
    <div className="bg-red-500 text-4xl">
      <Outlet />
    </div>
  );
}
