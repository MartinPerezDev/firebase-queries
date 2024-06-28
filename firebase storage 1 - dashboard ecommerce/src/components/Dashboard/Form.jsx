const Form = ({ dataForm, handleChangeInput, handleUploadFile, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        className="input"
        placeholder="nombre del producto.."
        name="nombre"
        value={dataForm.nombre}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="input"
        placeholder="descripcion del producto.."
        name="descripcion"
        value={dataForm.descripcion}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="input"
        placeholder="precio del producto.."
        name="precio"
        value={dataForm.precio}
        onChange={handleChangeInput}
      />
      <select name="categoria" onChange={handleChangeInput} className="input" >
        <option value={dataForm.categoria}>--Elija una categoria--</option>
        <option value="auriculares">Auriculares</option>
        <option value="teclados">Teclados</option>
        <option value="mouse">Mouse</option>
      </select>

      <input type="file" onChange={handleUploadFile} />

      <button type="submit" className="button-submit">
        Agregar
      </button>
    </form>
  );
};
export default Form;
