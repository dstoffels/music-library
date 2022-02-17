import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SongForm from '../../../SongForm/SongForm.jsx';

const EditModal = ({ song, show, setShow, editSong }) => {
	const handleClose = e => {
		e.stopPropagation();
		setShow(false);
	};

	const saveSong = (songData, id) => {
		editSong(songData, id);
		setShow(false);
	};

	return (
		<Modal show={show}>
			<Modal.Header>
				<Modal.Title>Editing {song.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SongForm song={song} saveSong={saveSong} />
			</Modal.Body>
			<Modal.Footer>
				<Button form='edit-form' type='submit'>
					Save Changes
				</Button>
				<Button color='error' onClick={handleClose}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditModal;
