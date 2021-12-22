import React from "react";

const AuthContext = React.createContext({
  userLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export default AuthContext;
