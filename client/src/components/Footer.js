import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Icon from './Icon';
import { GITHUB, MEDIUM, TWITTER, YOUTUBE } from './IconList';
import patreon from '../images/homepage/patreon.png';

const styles = theme => ({
  footerContainer: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    position: 'absolute',
    left: '0',
    bottom: '0',
    height: '300px',
    width: '100%',
    overflow: 'hidden',
  },
  footerSection: {
    width: '33%',
    textAlign: 'center',
    padding: '30px 0 25px 0',
  },
  footerTitle: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 700,
    marginBottom: '24px',
  },
  iconContainer: {
    margin: '0 0 16px',
  },
  iconBtn: {
    margin: '0 5px',

    '&:hover': {
      backgroundColor: '#15df89',
    },
  },
  patreonBtn: {
    maxWidth: '200px',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerLink: {
    color: '#fff',
    margin: '12px 0 24px 0',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },

  '@media screen and (max-width: 768px)': {
    footerContainer: {
      flexDirection: 'column',
      height: '831px',
    },
    footerSection: {
      width: '100%',
      padding: '30px 0 0 0',
    },
  },
});

const Footer = props => {
  const { classes } = props;

  const renderLink = (title, link) => (
    <Link className={classes.footerLink} to={link}>
      <Typography variant="button" color="inherit">
        {title}
      </Typography>
    </Link>
  );

  return (
    <footer className={classes.footerContainer}>
      <div className={classes.footerSection}>
        <Typography
          className={classes.footerTitle}
          variant="title"
          color="inherit"
        >
          More Chingu
        </Typography>

        <div className={classes.linkContainer}>
          <a className={classes.footerLink} href="mailto:admin@chingu.io">
            <Typography variant="button" color="inherit">
              admin@chingu.io
            </Typography>
          </a>
          <div className={classes.iconContainer}>
            <IconButton
              className={classes.iconBtn}
              href="https://medium.com/chingu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={MEDIUM} />
            </IconButton>
            <IconButton
              className={classes.iconBtn}
              href="https://www.youtube.com/channel/UCS7zmJXbe7FgTC3sHlUf4jw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={YOUTUBE} size="32" />
            </IconButton>
            <IconButton
              className={classes.iconBtn}
              href="https://github.com/Chingu-cohorts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={GITHUB} size="32" />
            </IconButton>
            <IconButton
              className={classes.iconBtn}
              href="https://twitter.com/ChinguCollabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={TWITTER} size="32" />
            </IconButton>
          </div>

          <a
            href="https://www.patreon.com/chingucollabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={patreon}
              className={classes.patreonBtn}
              alt="Patreon button"
            />
          </a>
        </div>
      </div>

      <div className={classes.footerSection}>
        <Typography
          className={classes.footerTitle}
          variant="title"
          color="inherit"
        >
          Company
        </Typography>
        <div className={classes.linkContainer}>
          {renderLink('Our Team', '/')}
          {renderLink('Privacy Policy', '/privacy-policy')}
          {renderLink('FAQ', '/faq')}
        </div>
      </div>

      <div className={classes.footerSection}>
        <Typography
          className={classes.footerTitle}
          variant="title"
          color="inherit"
        >
          Voyages
        </Typography>
        <div className={classes.linkContainer}>
          {renderLink('Past Projects', '/')}
          {renderLink('Upcoming Voyages', '/')}
          {renderLink('How to Join', '/')}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Footer);
