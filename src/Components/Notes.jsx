/** @format */

import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import CreateNote from './CreateNote';
import Note from './Note';
import './notes.css';

const Notes = ({ searchQuery }) => {
	const [inputText, setInputText] = useState('');
	const [notes, setNotes] = useState([]);
	const [editToggle, setEditToggle] = useState(null);

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const filteredNotes = notes.filter((note) =>
		note.text.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const editHandler = (id, text) => {
		setEditToggle(id);
		setInputText(text);
	};

	const saveHandler = () => {
		if (editToggle) {
			setNotes(
				notes.map((note) =>
					note.id === editToggle ? { ...note, text: inputText } : note
				)
			);
		} else {
			setNotes((prevNotes) => [
				...prevNotes,
				{
					id: uuid(),
					text: inputText,
					date: new Date().toISOString(),
				},
			]);
		}
		setInputText('');
		setEditToggle(null);
	};

	const deleteHandler = (id) => {
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('Notes'));
		if (data) {
			setNotes(data);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('Notes', JSON.stringify(notes));
	}, [notes]);

	return (
		<div className='notes'>
			{filteredNotes.map((note) =>
				editToggle === note.id ? (
					<CreateNote
						key={note.id}
						inputText={inputText}
						setInputText={setInputText}
						saveHandler={saveHandler}
					/>
				) : (
					<Note
						key={note.id}
						id={note.id}
						text={note.text}
						date={note.date}
						editHandler={editHandler}
						deleteHandler={deleteHandler}
					/>
				)
			)}
			{editToggle === null && (
				<CreateNote
					inputText={inputText}
					setInputText={setInputText}
					saveHandler={saveHandler}
				/>
			)}
		</div>
	);
};

export default Notes;
