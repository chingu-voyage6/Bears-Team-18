import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import logo from '../images/chingu/chingu.png';

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
    display: 'flex',
    alignItems: 'center',
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

  linkContainer: {
    display: 'flex',
  },

  headerLink: {
    color: '#fff',
    fontSize: '1.25rem',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '0 16px',
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
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
