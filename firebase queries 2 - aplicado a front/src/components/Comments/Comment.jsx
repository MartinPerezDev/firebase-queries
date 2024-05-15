const Comment = ({comentario}) => {
  return (
    <div className="comment">
      <h3 className="user-comment">{comentario.usuario}</h3>
      <h3 className="text-comment">{comentario.comentario}</h3>
    </div>
  )
}
export default Comment