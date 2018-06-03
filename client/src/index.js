import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/layout/src/Main.css';
import './components/layout/src/grid.css';
import './components/layout/src/normalize.css';
import './components/layout/src/queries.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
