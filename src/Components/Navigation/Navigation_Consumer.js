import "./Navigation.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Context/auth-context";
const NavigationConsumer = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
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
                  <Button onClick={props.onLogout}>Logout</Button>
                </li>
              ) : (
                ""
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default NavigationConsumer;
