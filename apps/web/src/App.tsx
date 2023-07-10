import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
export default function App() {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const login = () => loginWithRedirect();

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={login}>Log In</button>
      {isAuthenticated && <h2>{user?.name}</h2>}
    </>
  );
}
