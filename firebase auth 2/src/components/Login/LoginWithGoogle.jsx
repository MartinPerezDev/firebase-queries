import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase/firebaseService";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const LoginWithGoogle = () => {
  const navigate = useNavigate();

  const handleClickLoginGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      if (!userCredential.user) throw new Error("Error al loguear con google");
      //comprobamos si el usuario ya existe en nuestra base de datos
      const userRef = doc(db, "users", userCredential.user.uid);
      const userDb = await getDoc(userRef);
      //si el usuario no existe, lo creamos en nuestra db
      if (!userDb.exists()) {
        //subimos su nombre de usuario, email, etc a nuestra base da datos en firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          username: userCredential.user.email.split("@")[0],
          email: userCredential.user.email,
          avatar: "default.png",
        });
      }
      //si se loguea correctamente redireccionamos al usuario a /profile
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-with-google">
      <p>--Or continue with--</p>
      <div className="google-login-card" onClick={handleClickLoginGoogle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
          alt="google icon"
        />
        <h4>Sign up with Google</h4>
      </div>
    </div>
  );
};
export default LoginWithGoogle;
