import React from 'react';

import SortableColumnHeading from './SortableColumnHeading/SortableColumnHeading.jsx';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const fields = ['title', 'artist', 'album', 'genre', 'release_date'];

const SongTableHeader = ({}) => {
	const columns = fields.map(field => <SortableColumnHeading key={field} column={field} />);
	return (
		<TableHead>
			<TableRow>
				<TableCell className='table-heading'></TableCell>
				{columns}
			</TableRow>
		</TableHead>
	);
};

export default SongTableHeader;
