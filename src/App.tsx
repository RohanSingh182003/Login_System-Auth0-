import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './App.css'

function App() {

  const { loginWithRedirect , logout  , isAuthenticated , user} = useAuth0();

  return (
    <>
    <h1 className='text-center bg-white text-blue-700'>Hello World</h1>
    {isAuthenticated ? <button onClick={() => logout({ returnTo: window.location.origin })} className='text-center px-6 py-2 bg-cyan-400 text-white mt-12 border rounded-md'>Log out</button>:
    <button onClick={() => loginWithRedirect()} className='text-center px-6 py-2 bg-cyan-400 text-white mt-12 border rounded-md'>Login</button>}
      {isAuthenticated ?  <h3>{user.name}</h3>: <p></p>}
    </>
  )
}

export default App
