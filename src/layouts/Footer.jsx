import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container">
        <Link className={"link_white"} to="/">
          Home
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
