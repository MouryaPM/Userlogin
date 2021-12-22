import styles from "./MainHeader.module.css";
import Navigation from "../Navigation/Navigation";
const MainHeader = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h1>Profile App</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
