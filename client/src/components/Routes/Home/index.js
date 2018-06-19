import React from 'react';
import PropTypes from 'prop-types';

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
  darkWrapper: {
    padding: '10px 0 25px 0',
  },
  sectionTitle: {
    fontSize: '2.5em',
    margin: '0',
    padding: '15px 0',
  },
  widget: {
    width: '25%',
  },
  widgetWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '25px 0',
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
    position: 'absolute',
    bottom: '0',
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
  },
  '@media screen and (max-width: 767px)': {
    homeIntro: {
      display: 'flex',
      justifyContent: 'center',
      background: 'none',
    },
    titleWrapper: { paddingTop: '25px' },
    introTitle: {
      padding: '0',
      fontSize: '4em',
    },
    scrollBtn: { display: 'flex' },
  },
  '@media screen and (max-width: 600px)': {
    widget: { width: '100%' },
    widgetWrapper: { padding: '0' },
    darkWrapper: { padding: '25px 0' },
  },
};

const Home = props => {
  function renderStatic(content, classes) {
    return content.map(item => {
      return (
        <div key={item.title} className={classes.widget}>
          <img src={item.image} alt="" />
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
          className={`${classes.scrollBtn} secondaryBackground`}
          variant="fab"
        >
          <Icon icon={ARROW_DOWN} />
        </Button>
      </section>

      <section className={classes.whiteSection}>
        <h2 className={`${classes.sectionTitle} secondaryColor`}>
          CHINGU PROCESS
        </h2>
        <div className={classes.widgetWrapper}>
          {renderStatic(staticAssets.process, classes)}
        </div>
      </section>

      <section className={classes.darkSection}>
        <h2 className={`${classes.sectionTitle} primaryBackground`}>
          CURRENT COHORTS
        </h2>
        <div className={`${classes.widgetWrapper} ${classes.darkWrapper}`}>
          {renderStatic(staticAssets.cohorts, classes)}
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
        <div className={`${classes.widgetWrapper} ${classes.darkWrapper}`}>
          {renderStatic(staticAssets.projects, classes)}
        </div>
      </section>

      <section className={classes.whiteSection}>
        <h2 className={`${classes.bottomTitle} secondaryColor`}>Chingu</h2>
        <p className={classes.bottomText}>
          Chingu is a global collaboration platform and coding-cohort generator.
          We connect motivated learners with shared goals to learn, help and
          build together.
        </p>
      </section>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
