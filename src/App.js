import './App.css';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Home from './Home';

function App() {
	return (
		<Box className="App">
			<Header />
			<Home />
		</Box>
	);
}

export default App;
