/** @format */

import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons

const Note = ({ id, text, date, editHandler, deleteHandler }) => {
	return (
		<div className='saved_note'>
			<div className='note-body'>{text}</div>
			<div className='note_footer'>
				<span className='note_date'>{new Date(date).toLocaleDateString()}</span>
				<div className='note_actions'>
					<button
						className='action_button delete_button'
						onClick={() => deleteHandler(id)}>
						<FaTrash />
					</button>
					<button
						className='action_button edit_button'
						onClick={() => editHandler(id, text)}>
						<FaEdit />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Note;
