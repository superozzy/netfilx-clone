import React, { useState, useEffect } from "react";

import superagent from "superagent";
import { FavoriteMovie } from "../context/FavoriteContext";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const { addToFavorites } = FavoriteMovie();
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const getMovies = async () => {
      const response = await superagent.get(fetchUrl);
      console.log(response.body.results);
      setMovies(response.body.results);
    };
    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <section className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => addToFavorites(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </section>
    </div>
  );
}

export default Row;
