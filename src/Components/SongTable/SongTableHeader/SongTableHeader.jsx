import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import NewSongModal from '../../CreateModal/CreateModal.jsx';

const SongTableHeader = ({ showCreateModal }) => {
	return (
		<>
			<NewSongModal />

			<thead>
				<tr>
					<th>
						Title
						<ArrowDropDownIcon />
					</th>
					<th>Artist</th>
					<th>Album</th>
					<th>Genre</th>
					<th>Release Date</th>
					<th>
						<Button
							onClick={() => {
								showCreateModal();
							}}
							variant='outlined'>
							<AddIcon />
						</Button>
					</th>
				</tr>
			</thead>
		</>
	);
};

// REDUX

import { connect } from 'react-redux';
import { showCreateModal } from '../../CreateModal/redux.js';

export default connect(null, { showCreateModal })(SongTableHeader);
