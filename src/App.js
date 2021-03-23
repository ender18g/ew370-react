import './App.css';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Home from './Home';
import { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import ComputerVision from './ComputerVision';

function App() {
	const [ editOn, setEditOn ] = useState(false);
	const toggleEdit = () => {
		setEditOn(!editOn);
	};
	return (
		<Box className="App">
			<Header toggleEdit={toggleEdit} />
      <Switch>
        <Route exact path='/' render={()=><Home editOn={editOn} toggleEdit={toggleEdit} />}/>
                <Route exact path='/cv' render={()=><ComputerVision/>}/>
             <Route exact path='/edit' render={()=><Home editOn={editOn} toggleEdit={toggleEdit} />}/>
      </Switch>

		</Box>
	);
}

export default App;
