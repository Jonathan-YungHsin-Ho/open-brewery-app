import React from 'react';

export default function BreweryCard(props) {
  return (
    <div className='brewery-card'>
      <a
        href={props.data.website_url}
        target='_blank'
        rel='noopener noreferrer'>
        <h2>
          <span role='img' aria-label='beer emoji'>
            🍺
          </span>{' '}
          {props.data.name}{' '}
          <span role='img' aria-label='beer emoji'>
            🍺
          </span>
        </h2>
        <h3>~ {props.data.brewery_type} brewery ~</h3>
        <h4>{props.data.street}</h4>
        <h4>
          {props.data.city}, {props.data.state} {props.data.postal_code}
        </h4>
        <h4 className='phone'>
          <span role='img' aria-label='telephone emoji'>
            ☎️
          </span>{' '}
          ({props.data.phone.substr(0, 3)}) {props.data.phone.substr(3, 3)}-
          {props.data.phone.substr(6, 4)}
        </h4>
      </a>
    </div>
  );
}
