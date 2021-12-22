import { useState, useEffect, useContext, useRef } from "react";
import "./Login.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../Context/auth-context";
const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  //const [texttype,setText]=useState('password')

  const ctx = useContext(AuthContext);
  // const useremailRef = useRef();
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("In login");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    //clean up

    return () => {
      console.log("Clean up");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  //settimeout -> clean up -> timeout ->clean up -> timeout

  //Email
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes("@") && enteredPassword.trim().length > 6
    // );
  };

  const validateEmail = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  //Password
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // setFormIsValid(
    //   enteredEmail.includes("@") && event.target.value.trim().length > 6
    // );
  };

  const validatePassword = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // setText('text');
    //  console.log(useremailRef.current.value);
    //    useremailRef.current.value = "";
    //  setEnteredEmail("");
    ctx.onLogin(enteredEmail, enteredPassword);
    console.log(enteredEmail, enteredPassword);
  };
  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div className={`control ${emailIsValid === false ? "invalid" : ""}`}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={validateEmail}
            //    ref={useremailRef}
          />
        </div>
        <div
          className={`control ${passwordIsValid === false ? "invalid" : ""}`}
        >
          <label htmlFor="password">Password</label>
          <input
            // type={ texttype}
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            onBlur={validatePassword}
          />
        </div>
        <div className="actions">
          <Button type="submit" className="btn" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
