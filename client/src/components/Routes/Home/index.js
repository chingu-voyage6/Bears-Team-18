import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Icon from '../../Icon';
import { ARROW_DOWN } from '../../IconList';

import mainbg from '../../../images/homepage/main-bg.png';
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
    background: `url(${mainbg}) bottom right / 1000px 705px no-repeat`,
  },
  titleWrapper: {
    paddingTop: '80px',
  },
  introTitle: {
    margin: '0',
    fontWeight: '400',
    fontSize: '5em',
    textAlign: 'left',
    paddingLeft: '100px',
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
  registerBtn: {
    backgroundColor: '#15df89',
    color: 'white',
    fontSize: '2em',
    fontWeight: '500',
    padding: '15px 50px',
    margin: '15px 0 25px 0',

    '&:hover': {
      backgroundColor: '#15df89',
    },
  },

  '@media screen and (max-width: 1000px)': {
    homeIntro: {
      backgroundSize: '767px 541px',
    },
  },
  '@media screen and (max-width: 908px)': {
    widget: {
      width: '50%',
      margin: '15px 0',
    },
    widgetWrapper: { padding: '15px 0' },
  },
  '@media screen and (max-width: 767px)': {
    homeIntro: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      background: 'none',
    },
    titleWrapper: { paddingTop: '25px', marginBottom: 'auto' },
    introTitle: {
      padding: '0',
      fontSize: '4em',
    },
    scrollBtn: { display: 'flex' },
  },
  '@media screen and (max-width: 600px)': {
    widget: { width: '100%' },
    widgetWrapper: { padding: '0' },
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
          <h2 className={classes.introTitle}>BUILD MORE</h2>
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

        <Link to="/login" className="textDecorationNone">
          <Button
            className={classes.registerBtn}
            variant="contained"
            size="large"
          >
            Register
          </Button>
        </Link>
      </section>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
