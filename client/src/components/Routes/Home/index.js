import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Icon from '../../Icon';
import { ARROW_DOWN } from '../../IconList';
import RegisterButton from './RegisterButton';
import IntroTitle from './IntroTitle';
import WidgetWrapper from './WidgetWrapper';

import staticAssets from './static';

const styles = theme => ({
  homeContainer: {
    textAlign: 'center',
  },
  whiteSection: {
    padding: '32px 0',
  },
  darkSection: {
    backgroundColor: '#707399',
    color: 'white',
  },
  sectionTitle: {
    fontFamily: theme.typography.title.fontFamily,
    fontSize: '2.6em',
    margin: '0',
    padding: '15px 0',
  },
  homeIntro: {
    height: 'calc(100vh - 64px)',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '80px',
    paddingLeft: '96px',
    height: '50vh',
  },
  scrollBtn: {
    display: 'none',
    marginBottom: '25px',
  },
  bottomTitle: {
    fontFamily: theme.typography.title.fontFamily,
    fontSize: '5em',
    margin: '0 0 25px 0',
  },
  bottomText: {
    fontSize: '2em',
    fontWeight: '700',
    width: '70%',
    margin: '0 auto',
    paddingBottom: '25px',
  },
  '@media screen and (min-width: 1920px)': {
    homeIntro: {
      background: `url(${
        staticAssets.images['main-bg-xl']
      }) bottom right / auto 85% no-repeat`,
    },
  },
  '@media screen and (min-width: 1280px) and (max-width: 1919px) and (max-height: 760px)': {
    homeIntro: {
      background: `url(${
        staticAssets.images['main-bg-l']
      }) bottom right / auto 85% no-repeat`,
    },
  },
  '@media screen and (min-width: 1280px) and (max-width: 1919px) and (min-height: 761px)': {
    homeIntro: {
      background: `url(${
        staticAssets.images['main-bg-l']
      }) bottom right / 66.666666vw no-repeat`,
    },
  },
  '@media screen and (min-width: 800px) and (max-width: 1279px)': {
    homeIntro: {
      background: `url(${staticAssets.images['main-bg-l']}) no-repeat`,
      backgroundPosition: 'bottom left 400px',
      backgroundSize: 'auto 90%',
    },
  },
  '@media screen and (max-width: 799px)': {
    homeIntro: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      background: 'none',
    },
    whiteSection: {
      padding: 0,
    },
    titleWrapper: {
      marginTop: '48px',
      marginBottom: 'auto',
      padding: '0',
      alignItems: 'center',
    },
    scrollBtn: { display: 'flex' },
  },
});

const Home = props => {
  function triggerComponentScroll(component) {
    document.getElementById(component).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  const { classes } = props;

  return (
    <div className={classes.homeContainer}>
      <section className={`${classes.homeIntro} primaryBackground`}>
        <div className={classes.titleWrapper}>
          <IntroTitle title="code more" />
          <IntroTitle title="learn more" />
          <IntroTitle title="build more" last />
          <RegisterButton />
        </div>
        <Button
          onClick={() => triggerComponentScroll('process')}
          className={classes.scrollBtn}
          color="secondary"
          variant="fab"
        >
          <Icon icon={ARROW_DOWN} />
        </Button>
      </section>

      <section id="process" className={classes.whiteSection}>
        <h2 className={`${classes.sectionTitle} secondaryColor`}>
          CHINGU PROCESS
        </h2>
        <WidgetWrapper content={staticAssets.process} imgSize="default" />
      </section>

      <section className={classes.darkSection}>
        <h2 className={`${classes.sectionTitle} primaryBackground`}>
          CURRENT COHORTS
        </h2>
        <WidgetWrapper content={staticAssets.cohorts} imgSize="default" />
      </section>

      <section className={classes.whiteSection}>
        <h2 className={`${classes.sectionTitle} secondaryColor`}>
          WHAT PEOPLE ARE SAYING ABOUT CHINGU
        </h2>
      </section>

      <section className={classes.darkSection}>
        <h2 className={`${classes.sectionTitle} primaryBackground`}>
          FEATURED PROJECTS
        </h2>
        <WidgetWrapper content={staticAssets.projects} imgSize="large" />
      </section>

      <section className={classes.whiteSection}>
        <h2 className={`${classes.bottomTitle} secondaryColor`}>Chingu</h2>
        <p className={classes.bottomText}>
          Chingu is a global collaboration platform and coding-cohort generator.
          We connect motivated learners with shared goals to learn, help and
          build together.
        </p>
        <RegisterButton />
      </section>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
