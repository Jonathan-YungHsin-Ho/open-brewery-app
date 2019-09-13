import React from 'react';

export default function Header() {
  return (
    <div className='header'>
      <h1>
        <span role='img' aria-label='beers emoji'>
          🍻
        </span>{' '}
        Find a Brewery!{' '}
        <span role='img' aria-label='beers emoji'>
          🍻
        </span>
      </h1>
      <input type='text' placeholder='...search by name' />
    </div>
  );
}
