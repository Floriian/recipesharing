import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch } from "../../hooks";
import { setAuthInfo } from "../../features";
export function Layout() {
  const dispatch = useAppDispatch();
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (isAuthenticated) {
      getAccessTokenSilently()
        .then((token) =>
          dispatch(
            setAuthInfo({
              accessToken: token,
              name: user!.name!,
              sub: user!.sub!,
            })
          )
        )
        .catch((e) => console.log(e));
    }
  });

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
