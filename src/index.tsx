import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primeicons/primeicons.css';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
