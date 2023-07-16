import { Outlet } from "react-router-dom";

export function RecipeLayout() {
  return (
    <div className="flex w-full justify-center">
      <Outlet />
    </div>
  );
}
