import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import "./navbar.css";

const NavBar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/" className="brand-navbar">
        <img
          className="image-navbar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/1200px-Spotify.png"
          alt="icon spotify"
        />
      </Link>
      {location.pathname !== "/" && (
        <FaArrowLeftLong
          className="arrow-navbar"
          onClick={() => navigate(-1)}
        />
      )}
    </nav>
  );
};
export default NavBar;
