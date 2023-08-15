import { createContext } from 'react';
import { useState } from "react";

export const AuthContext = createContext(null);

function AuthContextProvider ( props ) {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  let toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated)
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      { props.children }
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;