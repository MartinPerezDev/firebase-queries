import {
  Timestamp,
  collection,
  collectionGroup,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../db/db";

const UsersList = () => {
  //guardamos la referencia a la coleccion
  const usersRef = collection(db, "users");

  //Obtener todos los usuarios
  const getUsers = async () => {
    const responseDb = await getDocs(usersRef);
    responseDb.forEach((user) => {
      console.log(user.data());
    });
  };

  //Obtener todos los usuarios con filtros

  const getUsersByFilter = async () => {
    //condicional
    //const q = query(usersRef, where("created_at", "<=", Timestamp.fromDate(new Date(2024, 1, 10))))

    //ordenar por
    //const q = query(usersRef, orderBy("created_at", "desc"))

    //limitar documentos(podria servir para paginar)
    //const q = query(usersRef, limit(3))

    //combinar varias - algunas require indexacion
    /*
    const q = query(
      usersRef,
      orderBy("created_at", "desc"),
      limit(3),
      where("created_at", "<=", Timestamp.fromDate(new Date(2024, 4, 10))),
      where("email", "==", "facundo@facundo.com")
    );
    */

    //consultar una subcollection
    const postRef = collectionGroup(db, "post")
    //subcollection de un usuario en particular
    //const userRef = doc(db, "users", "JUYIZa8q27blSAGEjr7N")
    //const postUserRef = collection(userRef, "post")
    const q = query(postRef)

    const responseDb = await getDocs(q);
    responseDb.forEach((user) => {
      console.log(user.data());
    });
  };

  getUsersByFilter();

  return (
    <div>
      <h1>Lista de usuarios:</h1>
    </div>
  );
};
export default UsersList;
