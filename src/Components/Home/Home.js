import { useContext } from "react";
import styles from "./Home.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../Context/auth-context";
const Home = () => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Welcome User</h1>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
