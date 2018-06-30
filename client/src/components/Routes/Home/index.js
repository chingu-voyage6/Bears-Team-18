import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

import { ARROW_DOWN } from '../../IconList';
import RegisterButton from './RegisterButton';
import IntroTitle from './IntroTitle';
import Section from './Section';
import WidgetWrapper from './WidgetWrapper';
import CtaSection from './CtaSection';

import staticAssets from './static';

const styles = ({ breakpoints, palette, spacing }) => ({
  homeContainer: {
    textAlign: 'center',
  },
  homeIntro: {
    height: 'calc(100vh - 96px)',
    [breakpoints.up('sm')]: { height: 'calc(100vh - 64px)' },
    minHeight: '384px', // total minHeight including header is 480px
    color: '#fff',
    backgroundColor: palette.primary.main,
  },
  bgContainer: {
    display: 'none',
  },
  titleWrapper: {
    height: 'inherit',
    minHeight: 'inherit',
    padding: `${spacing[3]} ${spacing[2]}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  '@media screen and (max-height: 550px)': {
    scrollBtn: { display: 'none' },
  },
  [`${breakpoints.up(800)} and (orientation: landscape)`]: {
    scrollBtn: { display: 'none' },
    homeIntro: {
      display: 'flex',
    },
    titleWrapper: {
      width: '432px',
      maxHeight: '600px',
      textAlign: 'right',
    },
    buttonWrapper: {
      width: '83%', // align with right-aligned text
    },
    bgContainer: {
      display: 'initial',
      height: '95%',
      width: 'calc(100vw - 432px)',
      alignSelf: 'flex-end',
      background: `url(${staticAssets.images['main-bg-l']}) no-repeat`,
      // top left cover: will clip bottom or right depending on aspect ratio
      backgroundPosition: 'top left',
      backgroundSize: 'cover',
      [breakpoints.up('lg')]: {
        backgroundImage: `url(${staticAssets.images['main-bg-xl']})`,
      },
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
          <div>
            <IntroTitle title="code more" />
            <IntroTitle title="learn more" />
            <IntroTitle title="build more" />
          </div>

          <div className={classes.buttonWrapper}>
            <RegisterButton title="Sign Up" />
          </div>

          {/* SCROLL BUTTON */}
          <Button
            onClick={() => triggerComponentScroll('process')}
            className={classes.scrollBtn}
            color="secondary"
            variant="fab"
          >
            <SvgIcon nativeColor="#fff">{ARROW_DOWN}</SvgIcon>
          </Button>
        </div>
        <div className={classes.bgContainer} />
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
      <CtaSection />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
