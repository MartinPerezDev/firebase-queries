import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/firebaseService";
import { db } from "../../firebase/firebaseService";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

import "./Register.scss";

const Register = () => {
  const navigate = useNavigate()
  const [dataForm, setDataForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangeInput = (e) =>
    setDataForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      //creamos el usuario en nuestro servicio de auth
      const userCredential = await createUserWithEmailAndPassword(auth, dataForm.email, dataForm.password);
      if (!userCredential.user) throw new Error("Error al crear el usuario");

      //una vez creado, subimos su nombre de usuario, email, etc a nuestra base da datos en firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username: dataForm.username,
        email: dataForm.email,
        avatar: "default.png",
        enabled: false
      });
      
      //enviamos la verificacion de email
      await sendEmailVerification(userCredential.user)

      //redireccionamos al usuario hacia /login
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <form className="form-register" onSubmit={handleSubmitForm}>
        <h2>Register</h2>

        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input
            className="input"
            placeholder="Enter username"
            type="username"
            id="username"
            name="username"
            value={dataForm.username}
            onChange={handleChangeInput}
          />
        </div>

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

        <div className="button-to-login">
          <p>Do you already have a user?</p>
          <Link className="link" to="/login">Log in!</Link>
        </div>
      </form>
    </div>
  );
};
export default Register;
