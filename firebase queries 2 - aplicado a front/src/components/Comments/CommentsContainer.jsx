import { useEffect, useState } from "react";
import { getCommentsByIdSong } from "../../helpers/firebase-queries";
import Comment from "./Comment";

import "./comments-container.css"

const CommentsContainer = ({ id }) => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    getCommentsByIdSong(id).then((data) => setComentarios([...data]));
  }, []);

  return (
    <div className="comments-container">
      <h1 className="title-comments">Comentarios</h1>
      {comentarios.map((comentario) => (
        <Comment key={comentario.id} comentario={comentario} />
      ))}
    </div>
  );
};
export default CommentsContainer;
