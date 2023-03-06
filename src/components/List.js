import React from "react";
import { FavoriteMovie } from "../context/FavoriteContext";
import { Button } from "react-bootstrap";
const List = () => {
  const { favorite, removeFromFavorites } = FavoriteMovie();

  console.log(favorite, removeFromFavorites);

  return (
    <div style={{ color: "white" }} className="favorite">
      {favorite.map((movie) => (
        <>
          <div className="favorite__posters">
            <img
              className="favorite__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.movie.poster_path}`}
              alt={movie.movie.name}
            />
            <p className="favorite__title">{movie.movie.title}</p>
            <div className="favorite__removebook">
              <Button onClick={() => removeFromFavorites(movie.id)}>
                Clear List
              </Button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default List;
