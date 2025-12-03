import SearchBar from '../SearchBar/SearchBar';
import './App.module.css';
import type { Movie } from '../../types/movie';
import { fetchMovies } from '../../services/movieService';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const [movie, setMovie] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    const response = await fetchMovies(query);

    if (response.length === 0) {
      toast('No movies found for your request.', {
        duration: 3000,
        position: 'top-center',
        style: {
          marginTop: '100px', // ← отступ сверху
          fontSize: '18px', // ← больше текст
          padding: '16px 20px',
          fontWeight: '700', // ← больше размер сообщения
          color: 'black', // цвет текста
          background: '#d1c64d', // цвет фона
          border: '2px solid black', // цвет границы
          borderRadius: '8px', // скругление углов
        },
      });
    }

    setMovie(response);

    console.log(movie);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
    </>
  );
}
