import React, {useState} from 'react';

import movieData from './movieData';
import MovieList from './components/MovieList';
import Popup from './components/MovieCard';
import Search from './components/Search';
import Formulaire from './components/Formlaire'
import Results from './components/Results'

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

Modal.setAppElement('#root')
function App() {

  const [moviesList, setMoviesList] = useState(movieData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Application</h1>
      </header>
      <main>
      <Formulaire addNewMovie={addNewMovie}/>
      <Search
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      
      
      <MovieList movies={moviesList} />

      
      </main>
    </div>
  );
}

export default App;
