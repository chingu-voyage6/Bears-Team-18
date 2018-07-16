import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';

export const client = new ApolloClient({
  // TODO: process.env.CHINGU_API_URI
  uri: 'https://2c01cb39.ngrok.io/graphql',
  request: req =>
    req.setContext({
      headers: {
        authorization: `Bearer ${window.localStorage.getItem('github_token')}`,
      },
    }),
  clientState: {
    defaults: {
      authenticated: false,
    },
  },
});

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App client={client} />
  </ApolloProvider>,
  document.getElementById('root')
);

// registerServiceWorker();
