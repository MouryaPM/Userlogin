import { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import AuthContext from "./Components/Context/auth-context";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log("In use Effect");
    const LoggedInInfo = localStorage.getItem("loginState");
    if (LoggedInInfo === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("loginState", "LOGGED_IN");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("loginState");
    setIsLoggedIn(false);
  };
  return (
    <div>
      <AuthContext.Provider
        value={{
          userLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler,
        }}
      >
        <MainHeader />
        <main>{!isLoggedIn ? <Login /> : <Home />}</main>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
// App.js -> Mainheader ->navigation
//App.js -> Login.js
