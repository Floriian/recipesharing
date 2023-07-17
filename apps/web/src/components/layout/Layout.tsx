import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { store } from "@/app/store/store";
import { Navbar } from "@/components/layout/Navbar";
import {
  setAccessToken,
  setUserInfo,
} from "@/features/authentication/authenticationSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        dispatch(setAccessToken({ accessToken: token }));
        sessionStorage.setItem("access_token", token);
      });

      if (user?.name && user?.sub) {
        dispatch(setUserInfo({ name: user.name, sub: user.sub }));
      }
    }
  });

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
