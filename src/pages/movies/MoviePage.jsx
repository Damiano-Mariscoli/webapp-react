import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { use } from "react";
import ReviewForm from "../../components/ReviewForm";
import GlobalContext from "../../contexts/golbalContext";

function MoviePage() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const { setIsLoading } = useContext(GlobalContext);
  function fetchMovie() {
    setIsLoading(true);
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
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
          {movie.reviews.map((review) => (
            <div key={review.id}>
              <p>{review.text}</p>
            </div>
          ))}
          <div>
            <ReviewForm id={id} onSuccess={fetchMovie} />
          </div>
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
