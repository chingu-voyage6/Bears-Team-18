import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { injectGlobal } from 'emotion';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// registerServiceWorker();
