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
  const [filteredMovies, setFilteredMovies] = useState(movies);
  useEffect(() => {
  if (genre === ''){
    setFilteredMovies(movies);
  } else {
    const filtered = movies.filter((movie) =>{
      return movie.genre === genre;
    });

    setFilteredMovies(filtered);
  }
  
  }, [genre]);
  return(
    <>
    <h1>MOVIES LIST</h1>
    <select value={genre}
    onChange={(event) => {
      setGenre(event.target.value);
    }}
    >
      <option value="">Tutti i generi</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
    </select>
    <p>Genere selezionato: {genre}</p>
    <ul>
      {filteredMovies.map((movie, index) => {
        return <li key={index} >{movie.title} {movie.genre}</li>
      })}
    </ul>
    </>
  )
}
export default App;
