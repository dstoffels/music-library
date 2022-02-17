import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const DeleteModal = ({ song, show, setShow, deleteSong }) => {
	const handleClose = e => {
		e.stopPropagation();
		setShow(false);
	};
	const handleDelete = () => {
		deleteSong(song.id);
	};

	return (
		<Modal show={show}>
			<Modal.Header>Are you sure you want to delete {song.title}?</Modal.Header>
			<Modal.Footer>
				<Button onClick={handleDelete}>Yes</Button>
				<Button color='error' onClick={handleClose}>
					No
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteModal;
