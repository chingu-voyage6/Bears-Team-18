import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Icon from './Icon';
import { GITHUB, MEDIUM, TWITTER, YOUTUBE, PATREON } from './IconList';

const styles = {
  footerContainer: {
    display: 'flex',
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
    margin: '25px 0',
  },
  iconLink: {
    margin: '0 7px',
  },
  patreonBtn: {
    backgroundColor: '#F96854',
    color: 'white',
    padding: '15px 16px',

    '& #btnText': {
      paddingLeft: '5px',
      fontSize: '1.2em',
    },
    '&:hover': {
      backgroundColor: '#F96854',
    },
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerLink: {
    margin: '10px 0 25px 0',
  },
  lastLink: {
    padding: '0',
  },

  '@media screen and (max-width: 768px)': {
    footerContainer: {
      flexDirection: 'column',
    },
    footerSection: {
      width: '100%',
      padding: '30px 0 0 0',
    },
    lastLink: {
      paddingBottom: '30px',
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
            <a
              className={classes.iconLink}
              href="https://medium.com/chingu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={MEDIUM} size="32" />
            </a>
            <a
              className={classes.iconLink}
              href="https://www.youtube.com/channel/UCS7zmJXbe7FgTC3sHlUf4jw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={YOUTUBE} size="32" />
            </a>
            <a
              className={classes.iconLink}
              href="https://github.com/Chingu-cohorts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={GITHUB} size="32" />
            </a>
            <a
              className={classes.iconLink}
              href="https://twitter.com/ChinguCollabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={TWITTER} size="32" />
            </a>
          </div>

          <Button
            className={classes.patreonBtn}
            variant="raised"
            href="https://www.patreon.com/chingucollabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={PATREON} color="#052D49" />
            <span id="btnText">BECOME A PATREON</span>
          </Button>
        </div>
      </div>
      <div className={classes.footerSection}>
        <h3 className={classes.footerTitle}>COMPANY</h3>
        <div className={classes.linkContainer}>
          <Link className={`${classes.footerLink} darkLink`} to="/">
            Our Team
          </Link>
          <Link className={`${classes.footerLink} darkLink`} to="/">
            Privacy Policy
          </Link>
          <Link className={`${classes.footerLink} darkLink`} to="/">
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
          <Link
            className={`${classes.footerLink} ${classes.lastLink} darkLink`}
            to="/"
          >
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
