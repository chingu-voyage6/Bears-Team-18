import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GithubCircle from 'mdi-material-ui/GithubCircle';

import firebase from 'firebase/app';
import { provider } from '../../../firebase/firebase';

import ChinguBox from '../../ChinguBox';

const styles = ({ palette, breakpoints }) => ({
  authContainer: {
    maxWidth: '600px',
    justifyContent: 'space-between',
  },

  githubBtn: {
    backgroundColor: '#171515',
    color: '#fff',
    display: 'flex',
    margin: '8px auto',
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: '#171515',
    },
  },

  warnText: {
    padding: '4px 16px',
    margin: '8px auto',
    textAlign: 'center',
    fontWeight: '500',
    [breakpoints.up('sm')]: {
      maxWidth: '66.666666%',
    },
  },

  githubLink: {
    color: palette.secondary.main,
    fontWeight: '700',
    textDecoration: 'none',
    '&:hover': {
      color: palette.secondary.dark,
    },
  },
});

class Auth extends React.Component {
  componentDidMount() {
    const token = window.localStorage.getItem('github_token');
    if (token) this.props.history.push('/dashboard');
    else {
      firebase
        .auth()
        .getRedirectResult()
        .then(({ credential }) =>
          window.localStorage.setItem('github_token', credential.accessToken)
        )
        .catch(console.error);
    }
  }

  handleClick = () => {
    firebase
      .auth()
      .signInWithRedirect(provider)
      .catch(console.error);
  };

  render() {
    const { classes } = this.props;

    return (
      <ChinguBox className={classes.authContainer}>
        <Typography component="h1" align="center" variant="title">
          Authenticate with GitHub
        </Typography>

        <Button
          onClick={this.handleClick}
          className={classes.githubBtn}
          variant="raised"
          size="large"
        >
          <GithubCircle style={{ fontSize: 32, marginRight: 16 }} />
          Log In / Register
        </Button>

        <div className={classes.warnText}>
          <strong>Don't have a GitHub account?</strong>
          <p>
            Chingu requires all members to have a Github account.{' '}
            <a
              className={classes.githubLink}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register now
            </a>{' '}
            to start your coding journey with Chingu!
          </p>
        </div>
      </ChinguBox>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Auth);
