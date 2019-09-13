import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getData } from '../store/actions';

import BreweryCard from './BreweryCard';

export default function BreweryList() {
  const data = useSelector(state => state.data);
  const isFetching = useSelector(state => state.isFetching);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getData()), []);

  console.log(data);

  return (
    <div className='brewery-wrapper'>
      {!isFetching &&
        data.map(brewery => <BreweryCard key={data.id} data={brewery} />)}
      {data.length === 0 && !isFetching && (
        <h3>
          <span role='img' aria-label='crying emoji'>
            😭
          </span>{' '}
          Sorry, there are no breweries that match that search...
        </h3>
      )}
    </div>
  );
}
