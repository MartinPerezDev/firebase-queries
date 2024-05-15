import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../db/db.js";

const songsRef = collection(db, "canciones")

export const getSongs = async () => {
  const responseDb = await getDocs(songsRef);
  const songs = responseDb.docs.map((user) => {
    return { id: user.id, ...user.data() };
  });
  return songs
}

export const getGenres = async () => {
  const responseDb = await getDocs(songsRef);
  const genres = responseDb.docs.map((user) => {
    return [...user.data().genero]
  });
  const generosPlanos = genres.reduce((acc, curr) => acc.concat(curr), []);
  const generosUnicos = generosPlanos.filter((genero, index, array) => array.indexOf(genero) === index);
  return generosUnicos
}

export const getSongsByGenre = async (genre) => {
  const q = query(songsRef, where("genero", "array-contains", genre))
  const responseDb = await getDocs(q);
  const songs = responseDb.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return songs;
}

export const getSongsByYear = async (year) => {
  const q = query(songsRef, where("año_lanzamiento", "<=", Number(year)))
  const responseDb = await getDocs(q);
  const songs = responseDb.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return songs;
}

export const getSongById = async (idSong) => {
  const songRef = doc(db, "canciones", idSong)
  const responseDb = await getDoc(songRef)
  const song = { id: responseDb.id, ...responseDb.data() }
  return song
}

export const getCommentsByIdSong = async (idSong) => {
  const songRef = doc(db, "canciones", idSong)
  const collectionComments = collection(songRef, "comentarios")
  const q = query(collectionComments)
  const responseDb = await getDocs(q);
  const comments = responseDb.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return comments;
}