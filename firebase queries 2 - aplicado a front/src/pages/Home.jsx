import FilterSongs from "../components/FilterSongs/FilterSongs";
import SongsContainer from "../components/Songs/SongsContainer";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <FilterSongs />
      <SongsContainer />
    </div>
  );
};
export default Home;
