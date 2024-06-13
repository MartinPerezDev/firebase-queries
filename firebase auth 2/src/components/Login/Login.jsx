import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseService";
import LoginWithGoogle from "./LoginWithGoogle";

import "./Login.scss";

const Login = () => {
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const navigate = useNavigate()

  const handleChangeInput = (e) =>
    setDataForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const handleSubmitForm = async(e) => {
    e.preventDefault();
    try {
      //logueamos al usuario
      const userCredential = await signInWithEmailAndPassword(auth, dataForm.email, dataForm.password)
      //si el usuario no verifico su email en el correo que llego entonces deslogueamos y disparamos un error
      if(!userCredential.user.emailVerified) {
        auth.signOut()
        throw new Error("El correo no fue verificado")
      }
      //si se loguea correctamente redireccionamos al usuario a /profile
      navigate("/profile")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form className="form-login" onSubmit={handleSubmitForm}>
        <h2>Login</h2>

        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            placeholder="Enter email"
            type="email"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChangeInput}
          />
        </div>

        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            placeholder="Enter password"
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChangeInput}
          />
        </div>

        <button className="submit" type="submit">
          Submit
        </button>

        <div className="button-to-register">
          <p>New user?</p>
          <Link className="link" to="/register">Register here!</Link>
        </div>
        <LoginWithGoogle />
      </form>
    </div>
  );
};
export default Login;
