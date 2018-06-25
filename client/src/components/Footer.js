import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import Icon from './Icon';
import { GITHUB, MEDIUM, TWITTER, YOUTUBE } from './IconList';
import patreon from '../images/homepage/patreon.png';

const styles = {
  footerContainer: {
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
    fontSize: '1.8em',
    fontWeight: '400',
    margin: '0 0 25px 0',
  },
  sectionContent: {
    fontSize: '1.6em',
    marginBottom: '25px',
  },
  iconContainer: {
    margin: '20px 0',
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
    margin: '10px 0 25px 0',
    fontSize: '1.6em',
  },
  lastLink: {
    padding: '0',
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
};

const Footer = props => {
  const { classes } = props;

  return (
    <footer className={`${classes.footerContainer} primaryBackground`}>
      <div className={classes.footerSection}>
        <h3 className={classes.footerTitle}>MORE CHINGU</h3>

        <div className={classes.sectionContent}>
          <div>admin@chingu.io</div>
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
        <h3 className={classes.footerTitle}>COMPANY</h3>
        <div className={classes.linkContainer}>
          <Link className={`${classes.footerLink} darkLink`} to="/">
            Our Team
          </Link>
          <Link
            className={`${classes.footerLink} darkLink`}
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link className={`${classes.footerLink} darkLink`} to="/faq">
            FAQ
          </Link>
        </div>
      </div>

      <div className={classes.footerSection}>
        <h3 className={classes.footerTitle}>VOYAGES</h3>
        <div className={classes.linkContainer}>
          <Link className={`${classes.footerLink} darkLink`} to="/">
            Past Projects
          </Link>
          <Link className={`${classes.footerLink} darkLink`} to="/">
            Upcoming Voyages
          </Link>
          <Link className={`${classes.footerLink} darkLink`} to="/">
            How to Join
          </Link>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
