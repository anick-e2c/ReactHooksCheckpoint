import React from 'react';
import TruncatedText from './Truncate';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      width: '300px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={movie.posterURL} 
        alt={movie.title} 
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '4px'
        }} 
      />
      <h2>{movie.title}</h2>
      <TruncatedText text={movie.description} maxLength={165} />

      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>Note:</span>
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            style={{
              color: i < movie.rating ? '#ffc107' : '#e4e5e9',
              fontSize: '20px'
            }}
          >
            ★
          </span>
        ))}
        <span style={{ marginLeft: '8px' }}>({movie.rating}/10)</span>
      </div>
    </div>
  );
};

export default MovieCard;