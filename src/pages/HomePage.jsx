import MovieCard from "../components/MovieCard";

function HomePage() {
  const movie = {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Crime",
    release_year: 1972,
    abstract:
      "The story of a powerful Italian-American crime family and their struggles.",
    image: null,
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2024-11-29T10:40:13.000Z",
  };
  return (
    <>
      <h1>Home Page</h1>

      <MovieCard movie={movie}></MovieCard>
    </>
  );
}
export default HomePage;
