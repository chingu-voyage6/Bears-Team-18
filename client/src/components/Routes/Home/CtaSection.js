import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Section from './Section';
import RegisterButton from './RegisterButton';
import logo from '../../../images/chingu/chingu.png';

const styles = ({ breakpoints, typography, palette }) => ({
  ctaSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: '800px',
    margin: '0 auto',
    '& img': {
      width: '156px',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '300px',
  },
  title: {
    fontWeight: 700,
  },
  paragraph: {
    maxWidth: '65%',
    fontWeight: 500,
  },
  [breakpoints.up('sm')]: {
    ctaSection: {
      flexDirection: 'row',
      minHeight: '450px',
      marginLeft: '64px',
    },
    [breakpoints.up(800)]: {
      ctaSection: {
        marginLeft: '96px',
      },
    },
    column: {
      height: '400px',
      flexBasis: '40vw',
      textAlign: 'left',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    columnRight: {
      marginRight: 'auto',
    },
    title: {
      alignSelf: 'flex-start',
    },
    paragraph: {
      maxWidth: '100%',
    },
  },
});

const CtaSection = ({ classes }) => (
  <Section variant="white">
    <div className={classes.ctaSection}>
      <div className={classes.column}>
        <Typography
          className={classes.title}
          component="h2"
          gutterBottom
          color="secondary"
          variant="display3"
        >
          Chingu
        </Typography>
        <Typography
          className={classes.paragraph}
          component="p"
          paragraph
          variant="headline"
        >
          Chingu is a global collaboration platform and coding-cohort generator.
          We connect motivated learners with shared goals to learn, help and
          build together.
        </Typography>
      </div>
      <div className={`${classes.column} ${classes.columnRight}`}>
        <img src={logo} alt="Chingu Logo" />
        <RegisterButton title="Apply Now" />
      </div>
    </div>
  </Section>
);

export default withStyles(styles, { withTheme: true })(CtaSection);
