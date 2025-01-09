import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="link-danger">
      <ul>
        <li>
          <NavLink className={"link_white"} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"link_white"} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={"link_white"} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
