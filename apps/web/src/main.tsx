import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-amyd6zt5.us.auth0.com"
      clientId="QN9QiCytg0wS9N434R7OrWg4JHFc6oNk"
      issuer="https://dev-amyd6zt5.us.auth0.com/"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "recipesharing_api",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
