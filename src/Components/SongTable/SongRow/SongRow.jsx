import React from 'react';

const SongRow = ({ song }) => {
	const { title, album, artist, genre, releaseDate } = song;
	return (
		<tr>
			<td>{title}</td>
			<td>{artist}</td>
			<td>{album}</td>
			<td>{genre}</td>
			<td>{releaseDate}</td>
		</tr>
	);
};

export default SongRow;
