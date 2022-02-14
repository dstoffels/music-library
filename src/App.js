import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';

import SongTable from './Components/SongTable/SongTable.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.jsx';

const App = () => {
	const [criterion, setCriterion] = useState('');

	return (
		<>
			<Navbar bg='light' sticky='top'>
				<Container fluid>
					<Navbar.Brand>slapSter</Navbar.Brand>
					<SearchBar criterion={criterion} setCriterion={setCriterion} />
				</Container>
			</Navbar>
			<Container>
				<SongTable searchCriterion={criterion} />
			</Container>
		</>
	);
};

export default App;
