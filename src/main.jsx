import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { PokemonProvider} from './context/Provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PokemonProvider>
			<App />
		</PokemonProvider>
	</React.StrictMode>
);
