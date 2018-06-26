import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Icon from '../../Icon';
import { ARROW_DOWN } from '../../IconList';
import RegisterButton from './RegisterButton';
import IntroTitle from './IntroTitle';
import Section from './Section';
import WidgetWrapper from './WidgetWrapper';

import staticAssets from './static';

const styles = theme => ({
  homeContainer: {
    textAlign: 'center',
  },
  homeIntro: {
    height: 'calc(100vh - 64px)',
    color: '#fff',
    backgroundColor: `${theme.palette.primary.main} !important`,
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
    marginBottom: '24px',
  },
  bottomTitle: {
    fontFamily: theme.typography.title.fontFamily,
    color: theme.palette.secondary.main,
    fontSize: '5em',
    margin: '0 0 24px 0',
  },
  bottomText: {
    fontSize: '2em',
    fontWeight: '500',
    width: '70%',
    margin: '0 auto 24px',
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
    titleWrapper: {
      marginTop: '48px',
      marginBottom: 'auto',
      padding: '0',
      alignItems: 'center',
    },
    scrollBtn: { display: 'flex' },
    ctaSection: {
      padding: '16px 0',
    },
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
      {/* INTRO */}
      <section className={classes.homeIntro}>
        <div className={classes.titleWrapper}>
          <IntroTitle title="code more" />
          <IntroTitle title="learn more" />
          <IntroTitle title="build more" last />
          <RegisterButton title="Sign Up" />
        </div>
        {/* SCROLL BUTTON */}
        <Button
          onClick={() => triggerComponentScroll('process')}
          className={classes.scrollBtn}
          color="secondary"
          variant="fab"
        >
          <Icon icon={ARROW_DOWN} />
        </Button>
      </section>

      {/* PROCESS */}
      <Section id="process" variant="white" title="chingu process">
        <WidgetWrapper content={staticAssets.process} imgSize="default" />
      </Section>

      {/* CURRENT COHORTS */}
      <Section variant="dark" title="current cohorts">
        <WidgetWrapper content={staticAssets.cohorts} imgSize="default" />
      </Section>

      {/* TESTIMONIALS */}
      <Section variant="white" title="what people say about chingu" />

      {/* FEATURED PROJECTS */}
      <Section variant="dark" title="featured projects">
        <WidgetWrapper content={staticAssets.projects} imgSize="large" />
      </Section>

      {/* CALL TO ACTION */}
      <Section variant="white">
        <div className={classes.ctaSection}>
          <h2 className={classes.bottomTitle}>Chingu</h2>
          <p className={classes.bottomText}>
            Chingu is a global collaboration platform and coding-cohort
            generator. We connect motivated learners with shared goals to learn,
            help and build together.
          </p>
          <RegisterButton title="Apply Now" />
        </div>
      </Section>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
