import React from 'react';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const SnackbarAction = ({ title, onClick, closeSnackbar }) => {
	const handleClick = () => {
		onClick();
		closeSnackbar();
	};

	const action =
		title && onClick ? (
			<Button color='info' onClick={handleClick}>
				{title}
			</Button>
		) : (
			''
		);
	return (
		<>
			{action}
			<IconButton onClick={closeSnackbar}>
				<CloseOutlinedIcon color='warning' fontSize='small' />
			</IconButton>
		</>
	);
};

import { connect } from 'react-redux';
import { closeSnackbar } from '../redux.js';

export default connect(null, { closeSnackbar })(SnackbarAction);
