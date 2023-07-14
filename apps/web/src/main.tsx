import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/DropdownMenuStyles.css";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-amyd6zt5.us.auth0.com"
        clientId="QN9QiCytg0wS9N434R7OrWg4JHFc6oNk"
        issuer="https://dev-amyd6zt5.us.auth0.com/"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "recipesharing_api",
        }}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
