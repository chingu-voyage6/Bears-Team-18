import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Icon from '../../Icon';
import { GITHUB } from '../../IconList';

const styles = {
  authContainer: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '15px 0',
    border: '1px solid #ddd',
    backgroundColor: '#FAFAFA',
    boxShadow: '0 2px 10px rgba(0, 0, 0, .2)',
  },
  authTitle: {
    fontSize: '2.5em',
    textAlign: 'center',
  },
  githubBtn: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    margin: '0 auto',
    padding: '15px 25px',
    fontSize: '1.6em',

    '&:hover': {
      backgroundColor: 'black',
    },
  },
  btnText: { paddingLeft: '15px' },
  warnText: {
    maxWidth: '500px',
    padding: '5px 15px',
    margin: '25px auto',
    fontSize: '1.6em',
    textAlign: 'center',
    fontWeight: '500',
    borderRadius: '5px',
  },
  githubLink: {
    color: '#15df89',
    fontWeight: '700',
    textDecoration: 'none',
  },
  divider: { padding: '20px 0' },

  '@media screen and (max-width: 768px)': {
    authContainer: {
      backgroundColor: 'white',
      maxWidth: '100%',
      border: 'none',
      boxShadow: 'none',
      margin: '0',
    },
    divider: { padding: '10px 0' },
  },
};

const Auth = props => {
  const { classes } = props;

  return (
    <div>
      <div className={classes.authContainer}>
        <h2 className={classes.authTitle}>Log In with Github</h2>

        <Button className={classes.githubBtn} variant="raised" size="large">
          <Icon icon={GITHUB} size="28" />
          <span className={classes.btnText}>Log In / Register</span>
        </Button>

        <div className={classes.warnText}>
          <strong>Not registered with Github?</strong>
          <p>
            Chingu requires all members to have a Github account to collaborate
            with others to build amazing projects. If not already registered,
            please visit{' '}
            <a
              className={classes.githubLink}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{' '}
            to register an account to become eligible to start your coding
            journey.
          </p>
        </div>
      </div>
      <div className={classes.divider} />
    </div>
  );
};

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);
