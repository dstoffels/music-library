import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import NewSongModal from '../../CreateModal/CreateModal.jsx';

const SongTableHeader = ({ createSong }) => {
	const [showNewModal, setShowNewModal] = useState(false);

	return (
		<>
			<NewSongModal show={showNewModal} setShow={setShowNewModal} createSong={createSong} />

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
								setShowNewModal(true);
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

export default SongTableHeader;
