import gql from 'graphql-tag';
import { client } from './index';

/**
 * Checks if the user is authenticated with firebase and has a token.
 * @returns {Boolean} true or false
 */
export const isAuthenticated = () => {
  const token = window.localStorage.getItem('github_token');
  const { authenticated } = client.readQuery({
    query: gql`
      query {
        authenticated
      }
    `,
  });

  return authenticated && token;
};
