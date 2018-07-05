import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GithubCircle from 'mdi-material-ui/GithubCircle';

const styles = ({ palette, breakpoints }) => ({
  container: {
    margin: 'auto',
    padding: '24px 16px',
  },

  authContainer: {
    minHeight: 320,
    maxWidth: '600px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: `3px solid ${palette.secondary.main}`,
    boxShadow: `10px 10px 2px ${palette.secondary.light}`,
  },

  title: {
    fontSize: '1.5rem',
    color: palette.secondary.main,
    padding: '24px 8px',
    borderBottom: `3px solid ${palette.secondary.main}`,
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

const Auth = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Paper className={classes.authContainer}>
        <Typography
          className={classes.title}
          component="h1"
          align="center"
          variant="title"
          gutterBottom
        >
          Authenticate with GitHub
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
    </div>
  );
};

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Auth);
