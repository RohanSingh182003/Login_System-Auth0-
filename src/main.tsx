import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Teams from './Components/Teams';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Auth0Provider
  domain="dev-a2wcxy7e.us.auth0.com"
  clientId="OLN4XQ5M8ISkZXmzG3o0up5xxZwHi0lJ"
  redirectUri={window.location.origin}
>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
          <Route path="home" element={<Home />} />
          <Route path="teams" element={<Teams />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </Auth0Provider>
)
