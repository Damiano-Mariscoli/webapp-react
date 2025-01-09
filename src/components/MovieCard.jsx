import { Link } from "react-router-dom";
import style from "./MovieCard.module.css";
function MovieCard({ movie }) {
  const { id, title, author, image, abstract } = movie;
  return (
    <>
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{ maxHeight: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{abstract}</p>
            <Link to={`/movies/${id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieCard;

{
  /* <div>
        <h1>{title}</h1>
      </div>
      <div>
        <img src={`${image}`} alt="" />
      </div>
      <Link to={`/movies/${id}`}>Read More</Link> */
}
