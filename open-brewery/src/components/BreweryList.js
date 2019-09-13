import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getData } from '../store/actions';

import BreweryCard from './BreweryCard';

export default function BreweryList() {
  const data = useSelector(state => state.data);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getData()), []);

  console.log(data);

  return (
    <div className='brewery-wrapper'>
      {data.map(brewery => (
        <BreweryCard key={data.id} data={brewery} />
      ))}
    </div>
  );
}
