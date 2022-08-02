import { Box } from '@chakra-ui/react';
import Header from './Header';
import Home from './Home';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ComputerVision from './ComputerVision';
import MobileJodel from './MobileJodel';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { DatabaseProvider, useFirebaseApp, StorageProvider } from 'reactfire';

function App() {
	const [ editOn, setEditOn ] = useState(false);
	const toggleEdit = () => {
		setEditOn(!editOn);
	};

	const app = useFirebaseApp();
	const database = getDatabase(app);
	const cloudStorage = getStorage(app);

	return (
		<Box className="App">
			<DatabaseProvider sdk={database}>
				<StorageProvider sdk={cloudStorage}>
					<Header toggleEdit={toggleEdit} />
					<Routes>
						<Route exact path="/" element={<Home editOn={editOn} toggleEdit={toggleEdit} />} />
						<Route exact path="/cv" element={<ComputerVision />} />
						<Route exact path="/edit" element={<Home editOn={editOn} toggleEdit={toggleEdit} />} />
						<Route exact path="/jodel" element={<MobileJodel />} />
					</Routes>
				</StorageProvider>
			</DatabaseProvider>
		</Box>
	);
}

export default App;
