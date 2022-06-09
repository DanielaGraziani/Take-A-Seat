import React, { useEffect, useState } from "react";
import s from "../pages/MoviesDetails.module.css";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import Loader from "../components/Loader";
import placeholder from "../img/placeholder2.png";

function MoviesDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true); // esto sera para la visualizacion del loading
  const [movie, setMovie] = useState(null);

  /* Al llegar a los detalles de la pelicula usamos un useEffect que hara un llamada asincrona para traernos la pelicula con el id de dicha pelicula */
  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  /* Si esta cargando mostrar el mensaje */
  if (isLoading) {
    return <Loader/>;
  }

  if (!movie) {
    return null;
  }


  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : placeholder;

  return (
    <div className={s.detailsContainer}>
      <img
        className={`${s.col} ${s.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${s.col} ${s.movieDetails}`}>
        <p className={s.title}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((e) => e.name).join(",  ")}
        </p>
        <p>
          <strong>Release Date: </strong> {movie.release_date}
        </p>
        <p>
          <strong>Runtime: </strong>{movie.runtime} minutes
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MoviesDetails;
