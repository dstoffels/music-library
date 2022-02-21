import React from 'react';

import Button from '@mui/material/Button';

import SortableColumnHeading from './SortableColumnHeading/SortableColumnHeading.jsx';

const fields = ['title', 'artist', 'album', 'genre', 'release_date'];

const SongTableHeader = ({}) => {
	const columns = fields.map(field => <SortableColumnHeading key={field} column={field} />);
	return (
		<>
			<thead>
				<tr>{columns}</tr>
			</thead>
		</>
	);
};

// REDUX

export default SongTableHeader;
