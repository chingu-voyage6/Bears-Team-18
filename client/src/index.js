import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// registerServiceWorker();
