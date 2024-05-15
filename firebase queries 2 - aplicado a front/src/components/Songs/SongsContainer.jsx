import Song from "./Song";
import { SongsContext } from "../../context/SongsContext";
import { useContext } from "react";

import "./songs-container.css";
import Loading from "../Loading/Loading";

const SongsContainer = () => {
  const { canciones, cargando } = useContext(SongsContext);

  return (
    <article className="canciones">
      {cargando ? (
        <Loading />
      ) : (
        canciones.map((cancion) => <Song key={cancion.id} cancion={cancion} />)
      )}
    </article>
  );
};
export default SongsContainer;
