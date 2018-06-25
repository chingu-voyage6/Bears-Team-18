import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  headerContainer: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    padding: '0 24px',
  },
  titleLink: {
    color: 'white',
    textDecoration: 'none',
  },
  headerTitle: {
    fontSize: '3.2em',
  },
  headerLink: {
    margin: '0 16px',
    color: '#fff',

    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
});

const Header = props => {
  const { classes } = props;

  return (
    <header className={classes.headerContainer}>
      <Link className={classes.titleLink} to="/">
        <h1 className={classes.headerTitle}>CHINGU</h1>
      </Link>

      <div>
        <Button
          size="small"
          disableRipple={true}
          className={classes.headerLink}
          href="https://medium.com/chingu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </Button>
        <Button
          size="small"
          disableRipple={true}
          component={Link}
          to="/login"
          className={classes.headerLink}
        >
          Log In
        </Button>
      </div>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
