import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="link-navbar" to="/">
        <FaHome size={30} />
        <p>Home</p>
      </Link>

      <Link className="link-navbar" to="/dashboard">
        <MdDashboard size={30} />
        <p>Dashboard</p>
      </Link>
    </nav>
  );
};
export default NavBar;
