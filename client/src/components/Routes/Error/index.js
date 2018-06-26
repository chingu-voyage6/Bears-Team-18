import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import chinguLogo from '../../../images/chingu/chingu.png';

const styles = {
  errorPageContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    margin: '25px 0',
    padding: '0 15px 40px 0',
  },
  errorPageTitle: { fontSize: '3em', margin: '25px 0' },
  errorPageText: { fontSize: '1.8em', margin: '10px 0' },
};

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
        Please reach out to us via email - admin@chingu.io - for further
        assistance.
      </p>

      <p className={classes.errorPageText}>
        Navigate back to{' '}
        <Link
          style={{
            color: '#15df89',
            textDecoration: 'none',
            fontWeight: '700',
          }}
          to="/"
        >
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

export default withStyles(styles)(ErrorPage);
