import React from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export function RecipeLayout({ children }: Props) {
  return <div className="flex w-full justify-center">{children}</div>;
}
