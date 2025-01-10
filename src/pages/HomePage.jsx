import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function HomePage() {
  const [movies, setMovies] = useState([]);
  function fetchMovies() {
    axios
      .get("http://localhost:3000/api/movies/")
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
        console.log(movies);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex g-5">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}></MovieCard>;
          })}
        </div>
      </div>
    </>
  );
}
export default HomePage;
