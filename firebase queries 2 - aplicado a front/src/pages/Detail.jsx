import { useParams } from "react-router-dom";
import DetailSongContainer from "../components/DetailProduct/DetailSongContainer";

const Detail = () => {
  const { idSong } = useParams();

  return (
    <>
      <DetailSongContainer idSong={idSong} />
    </>
  );
};
export default Detail;
