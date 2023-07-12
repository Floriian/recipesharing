import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { ProfileMenu } from "./ProfileMenu";
import { AuthMenu } from "./AuthMenu";

export function Menu() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <nav className="flex w-full justify-between bg-green-700 text-white text-xl p-2 gap-4">
      <div className=""></div>
      <div className=""></div>
      <div>
        {isAuthenticated ? (
          <>
            <ProfileMenu />
          </>
        ) : (
          <AuthMenu />
        )}
      </div>
    </nav>
  );
}
