import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ background: "#183D3D" }}>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "50px" }}
      >
        <ul className="d-flex gap-3 ">
          <li>
            <Link className="link_white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link_white" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link_white" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
