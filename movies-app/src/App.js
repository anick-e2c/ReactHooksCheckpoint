import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

const App = () => {

  const movieLists = [  
    {
      title: "Inception",
      description: "Un voleur qui dérobe des secrets grâce au partage des rêves se voit confier la mission inverse : implanter une idée dans l'esprit d'un directeur général.",
      posterURL: "https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg",
      rating: 9
    },
    {
      title: "The Dark Knight",
      description: "Batman accepte de travailler avec le procureur Harvey Dent pour lutter contre le crime organisé à Gotham City, mais le Joker fait des ravages et crée le chaos.",
      posterURL: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg",
      rating: 10
    },
    {
      title: "Pulp Fiction",
      description: "Les vies de deux hommes de main, d'un boxeur, de la femme d'un gangster et d'un couple de petits braqueurs s'entrecroisent dans une histoire de crime à Los Angeles.",
      posterURL: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_UF1000,1000_QL80_.jpg",
      rating: 8
    }
  ]
  // Initial state for movies
    
  const [movies, setMovies] = useState(movieLists);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]);
  };

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(movie => {
      // Filter by title and rating
      const matchesTitle = movie.title.toLowerCase().includes(title.toLowerCase());
      // Filter by rating
      const matchesRating = rating ? movie.rating >= rating : true;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filtered);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Mon Application Cinéma</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <Filter onFilter={handleFilter} />
          <AddMovie onAddMovie={handleAddMovie} />
        </div>
        <div style={{ flex: 2 }}>
          <MovieList movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
};

export default App;