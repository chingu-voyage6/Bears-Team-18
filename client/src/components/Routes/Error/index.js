import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles, withTheme } from '@material-ui/core/styles';

import chinguLogo from '../../../images/chingu/chingu.png';

const styles = ({ palette }) => ({
  errorPageContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '24px 0',
  },
  link: {
    color: palette.secondary.main,
    textDecoration: 'none',
    fontWeight: 500,
    '&:hover': {
      color: palette.secondary.dark,
    },
  },
  errorPageTitle: { margin: '24px 0' },
  errorPageText: { margin: '8px 0' },
});

const ErrorPage = props => {
  const { classes } = props;

  return (
    <div className={classes.errorPageContainer}>
      <img src={chinguLogo} alt="Chingu Logo" />

      <h2 className={classes.errorPageTitle}>{props.title}</h2>

      <p className={classes.errorPageText}>
        Consistently coming across problems?
      </p>

      <p className={classes.errorPageText}>
        Please reach out to us via{' '}
        <a className={classes.link} href="mailto:admin@chingu.io">
          email
        </a>{' '}
        for further assistance.
      </p>

      <p className={classes.errorPageText}>
        Navigate back to{' '}
        <Link to="/" className={classes.link}>
          Homepage
        </Link>
      </p>
    </div>
  );
};

ErrorPage.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(ErrorPage);
