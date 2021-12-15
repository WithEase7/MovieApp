/* eslint-disable prettier/prettier */
import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=4c5cb83a41b67b036e04ef5858c5f9dc';

//Get Popular Movies
export const getPopularMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/movie/popular?${apiKey}&language=en-US&page=1`,
  );
  return resp.data.results;
};

//Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/movie/upcoming?${apiKey}&language=en-US&page=1`,
  );
  return resp.data.results;
};

//Get Latest Movies
export const getLatestMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/movie/latest?${apiKey}&language=en-US&page=1`,
  );
  return resp.data.results;
};

//Get Top-Rated Movies
export const getTopRatedMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/movie/top_rated?${apiKey}&language=en-US&page=1`,
  );
  return resp.data.results;
};

//Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=37`,
  );
  return resp.data.results;
};

//Get Popular TV Shows
export const getPopularTVShows = async () => {
  const resp = await axios.get(
    `${apiUrl}/tv/popular?${apiKey}&language=en-US&page=1`,
  );
  return resp.data.results;
};

//Get Romantic Movies
export const getRomanticMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10749`,
  );
  return resp.data.results;
};

//Get Movie Details
export const getMovie = async id => {
  const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
  return resp.data;
};

//Search Movies and TVs
export const searchMovieTv = async (query, type) => {
  const resp = await axios.get(
    `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
  );
  return resp.data.results;
};
