import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Icon from '../../Icon';
import { ARROW_DOWN } from '../../IconList';
import RegisterButton from './RegisterButton';

import staticAssets from './static';

const styles = {
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
    fontSize: '2.6em',
    margin: '0',
    padding: '15px 0',
  },
  widget: {
    width: '25%',
  },
  widgetWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '40px 0',
  },
  widgetTitle: {
    fontSize: '2.5em',
    fontWeight: '400',
    textTransform: 'uppercase',
    margin: '0 0 12px 0',
  },
  widgetDescription: {
    fontSize: '1.6em',
    width: '65%',
    margin: '0 auto',
  },
  defaultImg: { width: '200px' },
  lgImg: { width: '300px' },
  homeIntro: {
    height: 'calc(100vh - 64px)',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '80px',
    paddingLeft: '100px',
    height: '50vh',
  },
  introTitle: {
    margin: '0',
    fontWeight: '400',
    fontSize: '5em',
    textAlign: 'left',
  },
  last: {
    marginBottom: 'auto',
  },
  scrollBtn: {
    display: 'none',
    marginBottom: '25px',

    '&:hover': {
      backgroundColor: '#15df89',
    },
  },
  bottomTitle: {
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
    widget: {
      width: '50%',
      margin: '15px 0',
    },
    widgetWrapper: { padding: '15px 0' },
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
      paddingTop: '50px',
      marginBottom: 'auto',
      padding: '0',
      alignItems: 'center',
    },
    introTitle: {
      textAlign: 'center',
    },
    scrollBtn: { display: 'flex' },
    widget: {
      width: '100%',
      margin: '15px 0',
    },
    widgetWrapper: { padding: '15px 0' },
  },
};

const Home = props => {
  function triggerComponentScroll(component) {
    document.getElementById(component).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function renderStatic(content, classes, imgSize) {
    let imgClass;

    imgClass = imgSize === 'default' ? classes.defaultImg : classes.lgImg;

    return content.map(item => {
      return (
        <div key={item.title} className={classes.widget}>
          <img className={imgClass} src={item.image} alt="" />
          <h3 className={classes.widgetTitle}>{item.title}</h3>
          <p className={classes.widgetDescription}>{item.description}</p>
        </div>
      );
    });
  }

  const { classes } = props;

  return (
    <div className={classes.homeContainer}>
      <section className={`${classes.homeIntro} primaryBackground`}>
        <div className={classes.titleWrapper}>
          <h2 className={classes.introTitle}>CODE MORE</h2>
          <h2 className={classes.introTitle}>LEARN MORE</h2>
          <h2 className={`${classes.introTitle} ${classes.last}`}>
            BUILD MORE
          </h2>
          <RegisterButton />
        </div>
        <Button
          onClick={() => triggerComponentScroll('process')}
          className={`${classes.scrollBtn} secondaryBackground`}
          variant="fab"
        >
          <Icon icon={ARROW_DOWN} />
        </Button>
      </section>

      <section id="process" className={classes.whiteSection}>
        <h2 className={`${classes.sectionTitle} secondaryColor`}>
          CHINGU PROCESS
        </h2>
        <div className={classes.widgetWrapper}>
          {renderStatic(staticAssets.process, classes, 'default')}
        </div>
      </section>

      <section className={classes.darkSection}>
        <h2 className={`${classes.sectionTitle} primaryBackground`}>
          CURRENT COHORTS
        </h2>
        <div className={classes.widgetWrapper}>
          {renderStatic(staticAssets.cohorts, classes, 'default')}
        </div>
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
        <div className={classes.widgetWrapper}>
          {renderStatic(staticAssets.projects, classes, 'large')}
        </div>
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

export default withStyles(styles)(Home);
