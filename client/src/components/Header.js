import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import HeaderMenu from './HeaderMenu';

import logo from '../images/chingu/chingu.png';

const styles = ({ palette, breakpoints, typography }) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    padding: '0 32px',
    [breakpoints.down('xs')]: {
      padding: '0 16px',
    },
  },

  dark: {
    backgroundColor: palette.primary.main,
    '& a': {
      color: '#fff',
    },
  },

  white: {
    backgroundColor: '#fff',
    // title
    '& > a': {
      color: palette.secondary.main,
    },
    // links
    '& > div': {
      '& a:hover, & a:focus, & a:active': {
        backgroundColor: palette.primary.main,
        color: '#fff',
      },
    },
  },

  titleLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: typography.title.fontFamily,
    fontSize: '2rem',
    fontWeight: 700,
    marginLeft: '16px',
  },

  linkContainer: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    height: 'inherit',
    [breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  headerLink: {
    height: '100%',
    lineHeight: '64px',
    fontSize: '1.25rem',
    textAlign: 'center',
    textDecoration: 'none',
    padding: '0 16px',
    '&:hover': {
      color: palette.secondary.main,
    },
  },
});

const Header = ({ classes, location }) => {
  const variant = location.pathname === '/' ? 'dark' : 'white';
  return (
    <header
      className={`${classes.headerContainer} ${
        variant === 'dark' ? classes.dark : classes.white
      }`}
    >
      <Link className={classes.titleLink} to="/">
        <img
          src={logo}
          alt="Chingu logo"
          width={48}
          style={{ marginRight: 8 }}
        />
        CHINGU
      </Link>

      <div className={classes.linkContainer}>
        <Typography
          className={classes.headerLink}
          component="a"
          href="https://medium.com/chingu"
          target="_blank"
          rel="noopener noreferrer"
          variant="button"
        >
          Blog
        </Typography>

        <Typography
          component={Link}
          to="/login"
          className={classes.headerLink}
          variant="button"
        >
          Log In
        </Typography>
      </div>
      <HeaderMenu variant={variant} />
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Header));
