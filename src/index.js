import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
	apiKey: 'AIzaSyDinZuBXMQbPuXTrEdl4DGRVH-EPZdK5ug',
	authDomain: 'mlbrain-855e7.firebaseapp.com',
	databaseURL: 'https://mlbrain-855e7.firebaseio.com',
	projectId: 'mlbrain-855e7',
	storageBucket: 'mlbrain-855e7.appspot.com',
	messagingSenderId: '465924632238',
	appId: '1:465924632238:web:70b361f129fe718078473f',
	measurementId: 'G-T76ESPE2N6'
};

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<FirebaseAppProvider firebaseConfig={firebaseConfig}>
				{/* basename="/Users/wrc/elsberry" */}
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</FirebaseAppProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
