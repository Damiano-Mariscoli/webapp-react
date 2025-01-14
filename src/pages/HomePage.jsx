import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import GlobalContext from "../contexts/golbalContext";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const { setIsLoading } = useContext(GlobalContext);
  function fetchMovies() {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/movies/", {
        params: {
          title: search,
        },
      })
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
        console.log(movies);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function searchMovies(e) {
    e.preventDefault();
    fetchMovies();
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <form onSubmit={searchMovies} className="d-flex">
            <input
              className="form-control me-2"
              placeholder="Cerca un film..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn"
              type="submit"
              style={{ background: "#93B1A6" }}
            >
              Cerca
            </button>
          </form>
        </div>
        <div className="row d-flex g-5">
          {movies.length ? (
            movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie}></MovieCard>;
            })
          ) : (
            <>
              <div>Nessun risultato trovato</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default HomePage;
