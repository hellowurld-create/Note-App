/** @format */

import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Notes from './Components/Notes';

function App() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div className='main'>
			<Header
				searchQuery={searchQuery}
				onSearchChange={handleSearchChange}
			/>
			<Notes searchQuery={searchQuery} />
		</div>
	);
}

export default App;
