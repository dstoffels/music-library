import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SongForm from '../SongForm/SongForm.jsx';

const NewSongModal = ({ show, setShow, createSong }) => {
	const handleClose = e => {
		e.stopPropagation();
		setShow(false);
	};

	const saveSong = songData => {
		createSong(songData);
		setShow(false);
	};

	return (
		<Modal show={show}>
			<Modal.Header>
				<Modal.Title>Add Song</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SongForm saveSong={saveSong} />
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

export default NewSongModal;
