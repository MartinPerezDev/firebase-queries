import { Link } from "react-router-dom";

import "./song.css";

const Song = ({ cancion }) => {
  return (
    <Link className="cancion" to={`/detail/${cancion.id}`}>
        <img className="imagen-cancion" src={cancion.imagen} alt="" />
        <div className="detalles-cancion">
          <h4 className="nombre-cancion">{cancion.nombre}</h4>
          <h5 className="artista-cancion">By {cancion.artista}</h5>
        </div>
    </Link>
  );
};
export default Song;
