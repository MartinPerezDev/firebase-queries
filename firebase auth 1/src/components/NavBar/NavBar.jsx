import { FaHome, FaRegUser } from "react-icons/fa";

import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="link-navbar" to="/">
        <FaHome size={30} />
        <p>Home</p>
      </Link>

      <Link className="link-navbar" to="/login">
        <FaRegUser size={30} />
        <p>Login</p>
      </Link>
      
    </nav>
  );
};
export default NavBar;
