const key = "264aad92044b3d557f34864f125548f6";
const page = 1;
const requests = {
  requestNowPlaying: `
    https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${page}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
  requestNetflixOriginal: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_networks=213`,
  requestActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99`,
};
export default requests;
