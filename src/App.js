import './App.css';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Home from './Home';
import { useState } from 'react';

function App() {
	const [ editOn, setEditOn ] = useState(false);
	const toggleEdit = () => {
		setEditOn(!editOn);
	};
	return (
		<Box className="App">
			<Header toggleEdit={toggleEdit} />
			<Home editOn={editOn} toggleEdit={toggleEdit} />
		</Box>
	);
}

export default App;
