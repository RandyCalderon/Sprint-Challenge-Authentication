import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './theme/cssconfig'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><ThemeProvider theme={theme}><App /></ThemeProvider></Router>, document.getElementById('root'));
registerServiceWorker();
