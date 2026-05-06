import { useEffect, useState } from "react";

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];



function App() {
  const [genre, setGenre] = useState('');
  return(
    <>
    <h1>MOVIES LIST</h1>
    <ul>
      {movies.map((movie, index) => {
        return <li key={index} >{movie.title} {movie.genre}</li>
      })}
    </ul>
    </>
  )
}
export default App;
