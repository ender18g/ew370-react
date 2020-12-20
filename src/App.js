import logo from './logo.svg';
import './App.css';
import { Flex } from '@chakra-ui/react';
import Menu from './Menu';
import Header from './Header';

function App() {
	return (
		<div className="App">
			<Header />
			<Flex margin={4}>
				<Menu />
			</Flex>
		</div>
	);
}

export default App;
