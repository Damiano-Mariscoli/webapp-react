import { Link } from "react-router-dom";
import style from "./MovieCard.module.css";
function MovieCard({ movie }) {
  const { id, title, author, image, abstract } = movie;
  return (
    <>
      <div className="col-12 col-lg-4 col-md-6">
        <div
          className="card position-relative h-100"
          style={{
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{
              width: "100%",
              aspectRatio: "1/1.4",
              borderRadius: "10px",
            }}
          />
          <div
            className=" d-flex flex-column bg-dark flex-grow-1 position-absolute"
            style={{
              width: "100%",
              height: "13rem",
              bottom: "0px",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <div className="card-body flex-grow-1">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{abstract}</p>
            </div>
            <div className="card-footer">
              <Link to={`/movies/${id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieCard;
