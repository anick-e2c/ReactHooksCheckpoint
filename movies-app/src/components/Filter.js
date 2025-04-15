import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ title, rating: Number(rating) });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      margin: '20px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="title" style={{ marginRight: '10px' }}>Titre:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="rating" style={{ marginRight: '10px' }}>Note minimale:</label>
        <input
          type="number"
          id="rating"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
      </div>
      <button type="submit" style={{
        padding: '8px 16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Filtrer
      </button>
    </form>
  );
};

export default Filter;