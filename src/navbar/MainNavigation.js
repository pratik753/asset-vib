import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import logo from "../images/main.png";
import "../style/style.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      {/* <img src={logo} alt="Logo" /> */}

      <div className={classes.logo}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "14rem", marginLeft: "-4rem" }}
        />
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
