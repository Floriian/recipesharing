import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/app/store/store.ts";
import { Auth0Context } from "@/contexts/Auth0Context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Context>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </Provider> */}
    </Auth0Context>
  </React.StrictMode>
);
