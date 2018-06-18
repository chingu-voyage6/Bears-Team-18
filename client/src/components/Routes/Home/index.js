import React from 'react';

import { withStyles } from '@material-ui/core/styles';

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
    margin: '25px 0',
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

  '@media screen and (max-width: 908px)': {
    widget: {
      width: '50%',
      margin: '15px 0',
    },
  },
  '@media screen and (max-width: 600px)': {
    widget: { width: '100%' },
    widgetWrapper: { margin: '0' },
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
        <div>hello</div>
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

export default withStyles(styles)(Home);
