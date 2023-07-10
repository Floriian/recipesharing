import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
export default function App() {
  const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  const [, setRecipes] = React.useState<unknown>();
  const [, setToken] = React.useState<string>();

  const fetchData = async () => {
    try {
      const token = await getAccessTokenSilently();
      setToken(token);
      const _recipes = await fetch("http://localhost:3000/recipes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRecipes(_recipes);
    } catch (e) {
      console.log(e);
    }
  };

  const login = () => loginWithRedirect();

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={login}>Log In</button>
      {/* // eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={fetchData}>Fetch Data</button>
      {isAuthenticated && <h2>{user?.name}</h2>}
    </>
  );
}
