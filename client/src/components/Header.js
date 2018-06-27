import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = ({ palette, breakpoints, typography }) => ({
  headerContainer: {
    backgroundColor: palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '64px',
    padding: '0 32px',
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      minHeight: '96px',
      paddingTop: '8px',
    },
  },
  titleLink: {
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: typography.title.fontFamily,
    fontSize: '2rem',
    fontWeight: 700,
    [breakpoints.up('sm')]: {
      marginLeft: '16px',
    },
  },

  headerLink: {
    color: '#fff',
    fontSize: '1.25rem',
    '&:hover': {
      color: palette.secondary.main,
    },
  },
});

const Header = props => {
  const { classes } = props;

  return (
    <header className={classes.headerContainer}>
      <Link className={classes.titleLink} to="/">
        CHINGU
      </Link>

      <div>
        <Button
          className={classes.headerLink}
          href="https://medium.com/chingu"
          target="_blank"
          rel="noopener noreferrer"
          disableRipple
        >
          Blog
        </Button>

        <Button
          component={Link}
          to="/login"
          className={classes.headerLink}
          disableRipple
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
