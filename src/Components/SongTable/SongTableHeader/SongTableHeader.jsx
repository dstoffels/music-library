import React from 'react';

import Button from '@mui/material/Button';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SongTableHeader = ({}) => {
	return (
		<>
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
				</tr>
			</thead>
		</>
	);
};

// REDUX

export default SongTableHeader;
