import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebaseService";
import { db } from "../../firebase/firebaseService";
import { getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState({});

  const getUser = () => {
    //detectamos cambios en el estado de autenticacion
    onAuthStateChanged(auth, async(user) => {
      //si el usuario esta autenticado recuperamos su info con el .uid
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userDb = await getDoc(userRef)
        setUser({ id: userDb.id, ...userDb.data() })
      } else {
        // Si el usuario cerro sesion
        setUser(null);
      }
    });
  };
  
  useEffect(() => {
    getUser()
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
      <p>image path: {user.avatar}</p>
    </div>
  );
};
export default Profile;
