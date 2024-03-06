import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContextProvider from "./context/AppContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <BrowserRouter>
    <Auth0Provider
      domain="dev-6zd3fl6pmro1db2i.us.auth0.com"
      clientId="LUjDfdCxGG9vIXdiTxEEJuhP2aBZtqNH"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppContextProvider>
        <App />
        <ToastContainer />
      </AppContextProvider>
    </Auth0Provider>
  </BrowserRouter>

  // </React.StrictMode>,
);
