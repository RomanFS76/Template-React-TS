import axios from 'axios';
import type { Movie } from '../types/movie';

const instanceTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org',
  timeout: 1000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const responce = await instanceTMDB.get<{ results: Movie[] }>(`/3/search/movie?query=${query}`);
  return responce.data.results;
};


// export const fetchMovies = async (query: string): Promise<Movie[]> => {
//   const response = await axios.get<{ results: Movie[] }>(
//     `https://api.themoviedb.org/3/search/movie?query=${query}`,
//     {
//       headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
//       },
//     }
//   );
//   return response.data.results;
// };
