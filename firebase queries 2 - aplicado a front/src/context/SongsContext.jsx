import { createContext, useEffect, useState } from "react";
import {
  getGenres,
  getSongs,
  getSongsByGenre,
  getSongsByYear,
} from "../helpers/firebase-queries.js";

export const SongsContext = createContext();

export const SongsProvider = ({ children }) => {
  const [canciones, setCanciones] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    setCargando(true);
    getSongs()
      .then((cancionesDb) => setCanciones([...cancionesDb]))
      .finally(() => setCargando(false));
    obtenerGeneros();
  }, []);

  const filtrarGeneros = (genero) => {
    setCargando(true);
    getSongsByGenre(genero)
      .then((cancionesDb) => setCanciones([...cancionesDb]))
      .finally(() => setCargando(false));
  };

  const obtenerGeneros = () => {
    getGenres().then((generosDb) => setGeneros([...generosDb]));
  };

  const filtrarAño = (year) => {
    getSongsByYear(year).then((cancionesDb) => setCanciones([...cancionesDb]));
  };

  return (
    <SongsContext.Provider
      value={{ canciones, generos, cargando, filtrarGeneros, filtrarAño }}
    >
      {children}
    </SongsContext.Provider>
  );
};
