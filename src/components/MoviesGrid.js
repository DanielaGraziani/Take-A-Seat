import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import s from "./MovieGrid.module.css";
import { get } from "../utils/httpClient";
import Loader from "./Loader";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import Error from "./Error";
/* Recorro el arreglo de peliculas recibido por json con un map, y le inyecto el resultado a MovieCard, pasandole como props la palabra movie.

Importante tener en cuenta el key
*/

function MoviesGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore]= useState(true)

  /* Es la grilla de peliculas en el home */
  const query = useQuery();
  const searchQuery = query.get("search");

  /* Video 3, minuto 50.. aca se maneja la busqueda en la barra search */
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = searchQuery
      ? "/search/movie?query=" + searchQuery + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
       setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [searchQuery, page]);

  if(!isLoading && movies.length === 0){
    return <Error/>
  }
 

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)} loader={ <Loader/>}
      >
        <ul className={s.moviesGrid}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}

export default MoviesGrid;

/* Aca conecto el componente movies grid con movies card, mediante props. movies card no se encuentra en la app principal, pero si vive dentro de movies grid */
