import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav(props) {
  const onClickHandler = () => {
    props.onOpenModal();
  };

  return (
    <nav className={classes.nav}>
      <h1>the planets</h1>

      <ul>
        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/mercury"
          >
            mecury
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/venus"
          >
            venus
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/earth"
          >
            earth
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/mars"
          >
            mars
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/jupiter"
          >
            jupiter
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/saturn"
          >
            saturn
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/uranus"
          >
            uranus
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/neptune"
          >
            neptune
          </NavLink>
        </li>
      </ul>

      <img
        onClick={onClickHandler}
        src={"/static/images/icon-hamburger.svg"}
        alt=""
      />
    </nav>
  );
}

export default Nav;
