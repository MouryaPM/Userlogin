import { useContext } from "react";
import "./Navigation.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Context/auth-context";
const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <nav>
      <ul>
        {ctx.userLoggedIn ? (
          <li>
            <a href="/">My Profile</a>
          </li>
        ) : (
          ""
        )}
        {ctx.userLoggedIn ? (
          <li>
            <a href="/">Settings</a>
          </li>
        ) : (
          ""
        )}
        <li>
          <a href="/">Contact Us</a>
        </li>
        {ctx.userLoggedIn ? (
          <li>
            <Button onClick={ctx.onLogout}>Logout</Button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
