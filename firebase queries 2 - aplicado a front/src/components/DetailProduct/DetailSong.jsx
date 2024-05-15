import CommentsContainer from "../Comments/CommentsContainer";
import "./detail-song.css";

const DetailSong = ({ cancion }) => {
  return (
    <div className="detail-song">
      <div className="content-detail">
        <img
          className="image-detail"
          src={cancion.imagen}
          alt={cancion.nombre}
        />
        <h2 className="text-detail">{cancion.nombre}</h2>
        <h3 className="text-detail">Artista: {cancion.artista}</h3>
        <h3 className="text-detail">Album: {cancion.album}</h3>
        <h3 className="text-detail">Año: {cancion.año_lanzamiento}</h3>
      </div>
      { cancion.id && <CommentsContainer id={cancion.id} /> }
    </div>
  );
};
export default DetailSong;
