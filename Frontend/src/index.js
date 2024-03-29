import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
  domain={process.env.REACT_APP_domain}
  clientId={process.env.REACT_APP_clientId}
  authorizationParams={{
    redirect_uri: window.location.origin+'/studenthome'
  }}
>{console.log(process.env)}
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
