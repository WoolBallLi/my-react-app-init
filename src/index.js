import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './js/App';
import ErrorBoundary from './ErrorBoundary'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  , document.getElementById('root'));
registerServiceWorker();
