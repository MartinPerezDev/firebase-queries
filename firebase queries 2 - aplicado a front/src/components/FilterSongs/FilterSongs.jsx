import { useContext, useState } from "react";
import { SongsContext } from "../../context/SongsContext";

import "./filter-songs.css";

const FilterSongs = () => {
  const { filtrarGeneros, generos, filtrarAño } = useContext(SongsContext);
  const [rango, setRango] = useState(2024);

  const handleChange = (e) => {
    setRango(e.target.value)
    filtrarAño(e.target.value)
  };

  return (
    <aside className="filtro-productos">
      <div>
        <h4>Categorias</h4>
        <div className="caja-filtro">
          {generos.map((genero, i) => (
            <div
              key={i + genero}
              className="boton-filtro"
              onClick={() => filtrarGeneros(genero)}
            >
              {genero}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4>Año</h4>
        <input className="rango" type="range" min={1970} max={2024} value={rango} step={1} onChange={handleChange} />
        <h5>Desde 1970 - Hasta: {rango}</h5>
      </div>
    </aside>
  );
};
export default FilterSongs;
