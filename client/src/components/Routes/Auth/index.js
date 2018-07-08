import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GithubCircle from 'mdi-material-ui/GithubCircle';

const styles = {
  authContainer: {
    minHeight: 320,
    maxWidth: '600px',
    margin: 'auto',
    padding: '24px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  githubBtn: {
    backgroundColor: 'black',
    width: '250px',
    color: 'white',
    display: 'flex',
    margin: '0 auto',
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: 'black',
    },
  },
  warnText: {
    maxWidth: '66.666666%',
    padding: '4px 16px',
    margin: '8px auto',
    textAlign: 'center',
    fontWeight: '500',
  },
  githubLink: {
    color: '#15df89',
    fontWeight: '700',
    textDecoration: 'none',
  },

  '@media screen and (max-width: 600px)': {
    authContainer: {
      backgroundColor: 'white',
      maxWidth: '100%',
      border: 'none',
      boxShadow: 'none',
      margin: '0',
    },
    warnText: {
      maxWidth: '90%',
    },
  },
};

const Auth = props => {
  const { classes } = props;

  return (
    <Paper className={classes.authContainer}>
      <Typography component="h1" align="center" variant="title" gutterBottom>
        Log in with GitHub
      </Typography>

      <Button className={classes.githubBtn} variant="raised" size="large">
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
    </Paper>
  );
};

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);
