import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, author, image, abstract } = movie;
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <Link to={`/book/${id}`}>Read More</Link>
    </>
  );
}
export default MovieCard;
