import { useEffect, useState } from "react";
import { getSongById } from "../../helpers/firebase-queries";
import DetailSong from "./DetailSong";
import Loading from "../Loading/Loading";

const DetailSongContainer = ({ idSong }) => {
  const [cancion, setCancion] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSongById(idSong)
      .then((data) => setCancion(data))
      .finally(() => setLoading(false));
  }, []);

  return <>{loading ? <Loading /> : <DetailSong cancion={cancion} />}</>;
};
export default DetailSongContainer;
