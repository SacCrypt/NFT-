import { Link } from "react-router-dom";
import styles from "../static/css/navbar.module.css";

const Navbar = ({ isLoggedIn }) => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link to={"/#"}>
          {" "}
          <span> NFT </span> GENERATOR{" "}
        </Link>
      </div>
      <div className={styles.innerflex}>
        <Link to={"/#"}> About</Link>

        <Link to={"/#"}> Features </Link>

        <Link to={"/Pricing"}> Pricing </Link>
      </div>
      {isLoggedIn ? (
        <div style={{ display: "flex" }}>{isLoggedIn.email} </div>
      ) : (
        <div className={styles.innerflex}>
          <Link to={"/Login"}> Login </Link>

          <Link to={"/Signup"}> Signup </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
