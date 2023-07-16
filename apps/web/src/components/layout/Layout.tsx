import { useAppDispatch } from "@/app/store/hooks";
import { Navbar } from "@/components/layout/Navbar";
import { setAuthenticationState } from "@/features/authentication/authenticationSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (isAuthenticated) {
      getAccessTokenSilently()
        .then((token) =>
          dispatch(
            setAuthenticationState({
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
      <Navbar />
      <Outlet />
    </>
  );
}
