import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import superagent from "superagent";
import requests from "../requests";
import { FavoriteMovie } from "../context/FavoriteContext";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const { addToFavorites } = FavoriteMovie();
  useEffect(() => {
    const getMovies = async () => {
      const response = await superagent.get(requests.requestNetflixOriginal);
      console.log(response.body.results);

      setMovie(
        response.body.results[
          Math.floor(Math.random() * response.body.results.length)
        ]
      );
    };

    getMovies();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundColor:
          "linear-gradient(200deg,transparent,rgba(37,37,37,0.61),#111)",
      }}
    >
      <div className="banner__container">
        <h1>{movie.title}</h1>
        <p className="banner__description">{movie.overview}</p>
        <p style={{ color: "gray", opacity: "1" }}>
          Release date : {movie.release_date}
        </p>
        <div className="banner__btns">
          <Button bsStyle="default">Play</Button>
          <Button bsStyle="danger" onClick={() => addToFavorites(movie)}>
            My list
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
