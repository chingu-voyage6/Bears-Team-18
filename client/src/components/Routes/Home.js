import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  homeContainer: {
    textAlign: 'center',
    lineHeight: 1.6,
  },
  homeIntro: {
    height: 'calc(100vh - 64px)',
  },
  whiteSection: {
    padding: '32px 0',
  },
  sectionTitle: {
    fontSize: '2.5em',
    margin: '0',
    padding: '15px 0',
  },
  processWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '25px 0',
  },

  darkSection: {
    backgroundColor: '#707399',
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
};

const Home = props => {
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
        <div className={classes.processWrapper}>
          <div className={classes.process}>Process 1</div>
          <div className={classes.process}>Process 2</div>
          <div className={classes.process}>Process 3</div>
          <div className={classes.process}>Process 4</div>
        </div>
      </section>

      <section className={classes.darkSection}>
        <h2 className={`${classes.sectionTitle} primaryBackground`}>
          CURRENT COHORTS
        </h2>
        <div className={classes.cohortWrapper}>
          <div className={classes.cohort}>Cohort 1</div>
          <div className={classes.cohort}>Cohort 2</div>
          <div className={classes.cohort}>Cohort 3</div>
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
        <div className={classes.projectWrapper}>
          <div className={classes.project}>Project 1</div>
          <div className={classes.project}>Project 2</div>
          <div className={classes.project}>Project 3</div>
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
