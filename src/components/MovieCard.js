import s from "../components/MovieCard.module.css";
import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../img/placeholder2.png";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300/" + movie.poster_path
    : placeholder;


  /* Seleccionamos una pelicula y le pasa el id */
  return (
    <div className={s.movieContainer}>
      <li className={s.movieCard}>
        <Link to={"/movies/" + movie.id}>
          <img
            width={226}
            height={325}
            className={s.movieImg}
            src={imageUrl}
            alt={movie.title}
          />
          <div className={s.movieInfo}>
            {movie.title}{" "}
            <span className={s.tag}>⭐{movie.vote_average}</span>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default MovieCard;

/*  */
