import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { use } from "react";

function MoviePage() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  function fetchMovie() {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <img
            src={`http://localhost:3000/images/movies-covers/${movie.image}`}
            alt=""
          />
        </>
      ) : (
        <>
          <h1>film non trovato</h1>
        </>
      )}
    </>
  );
}
export default MoviePage;
