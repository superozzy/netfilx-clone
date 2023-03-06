import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const addToFavorites = (movie, image) => {
    setFavorite((prev) => [...prev, { movie, image }]);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorite];
    const newFavorites = oldFavorites.filter((book) => book.id !== id);
    return setFavorite(newFavorites);
  };
  return (
    <FavoriteContext.Provider
      value={{ favorite, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const FavoriteMovie = () => {
  return useContext(FavoriteContext);
};
