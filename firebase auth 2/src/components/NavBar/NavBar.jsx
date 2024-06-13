import { FaHome, FaRegUser } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseService";

import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClickLogout = async () => {
    try {
      await auth.signOut();
      //si se loguea correctamente redireccionamos al usuario a /profile
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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

      <div className="link-navbar" onClick={handleClickLogout}>
        <IoLogOutSharp size={30} />
        <p>Logout</p>
      </div>
    </nav>
  );
};
export default NavBar;
