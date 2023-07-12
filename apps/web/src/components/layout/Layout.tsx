import React from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";
export function Layout() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
