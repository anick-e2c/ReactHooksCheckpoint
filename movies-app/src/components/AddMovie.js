import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      margin: '20px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>Ajouter un nouveau film</h2>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="title" style={{ marginRight: '10px' }}>Titre:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="description" style={{ marginRight: '10px' }}>Description:</label>
        <textarea
          id="description"
          name="description"
          value={newMovie.description}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="posterURL" style={{ marginRight: '10px' }}>URL de l'affiche:</label>
        <input
          type="url"
          id="posterURL"
          name="posterURL"
          value={newMovie.posterURL}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="rating" style={{ marginRight: '10px' }}>Note (0-10):</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="0"
          max="10"
          value={newMovie.rating}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
      </div>
      <button type="submit" style={{
        padding: '8px 16px',
        backgroundColor: '#2196F3',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Ajouter le film
      </button>
    </form>
  );
};

export default AddMovie;