import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import GithubCircle from 'mdi-material-ui/GithubCircle';
import Youtube from 'mdi-material-ui/Youtube';
import Medium from 'mdi-material-ui/Medium';
import Twitter from 'mdi-material-ui/Twitter';
import patreon from '../images/homepage/patreon.png';

const styles = theme => ({
  footerContainer: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
    padding: '0 8px',
  },
  footerSection: {
    width: '33%',
    textAlign: 'center',
    padding: '32px 0 24px 0',
  },
  footerTitle: {
    marginBottom: '24px',
  },
  iconContainer: {
    margin: '0 0 16px',
  },
  iconLink: {
    color: '#fff',
    margin: '0 8px',
  },
  icon: {
    fontSize: 32,
    '&:hover': {
      color: theme.palette.secondary.main,
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

  [theme.breakpoints.down('xs')]: {
    footerContainer: {
      flexDirection: 'column',
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

          {/* ICONS */}
          <div className={classes.iconContainer}>
            <a
              className={classes.iconLink}
              href="https://medium.com/chingu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Medium className={classes.icon} />
            </a>
            <a
              className={classes.iconLink}
              href="https://www.youtube.com/channel/UCS7zmJXbe7FgTC3sHlUf4jw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className={classes.icon} />
            </a>
            <a
              className={classes.iconLink}
              href="https://github.com/Chingu-cohorts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubCircle className={classes.icon} />
            </a>
            <a
              className={classes.iconLink}
              href="https://twitter.com/ChinguCollabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className={classes.icon} />
            </a>
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
