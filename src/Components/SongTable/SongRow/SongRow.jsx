import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import DeleteModal from './DeleteModal/DeleteModal.jsx';
import EditModal from './EditModal/EditModal.jsx';

import './SongRow.css';

const SongRow = ({ song, deleteSong, editSong }) => {
	const { title, album, artist, genre, release_date } = song;

	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);

	const handleShowDelete = e => {
		setShowDelete(true);
		e.stopPropagation();
	};

	const handleClick = e => {
		e.stopPropagation();
		setShowEdit(true);
	};

	return (
		<>
			<tr onClick={handleClick} className='song-row'>
				<td>{title}</td>
				<td>{artist}</td>
				<td>{album}</td>
				<td>{genre}</td>
				<td>{release_date}</td>
				<td>
					<Button color='error' onClick={handleShowDelete}>
						<DeleteIcon />
					</Button>
				</td>
			</tr>
			<DeleteModal song={song} show={showDelete} setShow={setShowDelete} deleteSong={deleteSong} />
			<EditModal song={song} show={showEdit} setShow={setShowEdit} editSong={editSong} />
		</>
	);
};

export default SongRow;
