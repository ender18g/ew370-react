import './App.css';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Home from './Home';
import { useState } from 'react';
import Auth from './Auth';
import 'firebase/auth';

function App() {
	const [ editOn, setEditOn ] = useState(false);
	const toggleEdit = () => {
		setEditOn(!editOn);
	};
	return (
		<Box className="App">
			<Box>
				<Auth />
			</Box>
			<Header toggleEdit={toggleEdit} />
			<Home editOn={editOn} toggleEdit={toggleEdit} />
		</Box>
	);
}

export default App;
