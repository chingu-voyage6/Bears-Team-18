import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    padding: '0 25px',
  },
  titleLink: {
    color: 'white',
    textDecoration: 'none',
  },
  headerTitle: {
    fontSize: '3.2em',
  },
  headerLink: {
    margin: '0 15px',
    fontSize: '1.6em',
  },
};

const Header = props => {
  const { classes } = props;

  return (
    <header className={`${classes.headerContainer} primaryBackground`}>
      <Link className={classes.titleLink} to="/">
        <h1 className={classes.headerTitle}>CHINGU</h1>
      </Link>

      <div>
        <a
          className={`${classes.headerLink} darkLink`}
          href="https://medium.com/chingu"
          target="_blank"
        >
          Blog
        </a>
        <Link className={`${classes.headerLink} darkLink`} to="/sign-in">
          Log In
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
