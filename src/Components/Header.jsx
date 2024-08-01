/** @format */

import React from 'react';

const Header = ({ searchQuery, onSearchChange }) => {
	return (
		<div className='header'>
			<h1 className='title'>Notes</h1>
			<input
				type='text'
				placeholder='Search notes...'
				value={searchQuery}
				onChange={onSearchChange}
				className='search_input'
			/>
		</div>
	);
};

export default Header;
