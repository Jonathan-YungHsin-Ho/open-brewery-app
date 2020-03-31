import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDarkMode } from '../hooks/useDarkMode';
import { states } from '../states';
import { getData } from '../store/actions';

export default function Header() {
	const [search, setSearch] = useState('');

	const dispatch = useDispatch();

	const [darkMode, setDarkMode] = useDarkMode(false);

	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};

	const handleSelect = e => {
		dispatch(getData(`?by_state=${e.target.value}&per_page=50`));
		setSearch('');
	};

	const handleClick = e => {
		e.preventDefault();
		dispatch(getData(`/search?query=${search}&per_page=50`));
	};

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			e.preventDefault();
			dispatch(getData(`/search?query=${search}&per_page=50`));
		}
	};

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
			<select onChange={handleSelect}>
				<option>Select a state...</option>
				{states.map(state => (
					<option
						key={state.abbreviation}
						value={state.name.split(' ').join('_')}>
						{state.name}
					</option>
				))}
			</select>
			<div className='search'>
				<input
					type='text'
					placeholder='...search'
					value={search}
					onChange={e => setSearch(e.target.value)}
					onKeyDown={e => handleKeyDown(e)}
				/>
				<button onClick={handleClick}>Go!</button>
			</div>
			<div onClick={toggleMode} className='toggle'></div>
		</div>
	);
}
