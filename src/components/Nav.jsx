import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="d-flex justify-content-between mx-5 mb-0 py-2">
      <img src="../logo.svg" alt="" style={{ width: "100px" }} />
      <ul className="d-flex align-items-center gap-3">
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
