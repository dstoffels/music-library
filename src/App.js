import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import SongTable from './Components/SongTable/SongTable.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.jsx';

const App = () => {
	const [criterion, setCriterion] = useState('');

	return (
		<Container>
			<SearchBar criterion={criterion} setCriterion={setCriterion} />
			<SongTable searchCriterion={criterion} />
		</Container>
	);
};

export default App;
