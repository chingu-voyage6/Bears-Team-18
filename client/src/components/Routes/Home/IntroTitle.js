import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ breakpoints, typography }) => ({
  root: {
    color: '#fff !important',
    textTransform: 'uppercase',
    [breakpoints.down('xs')]: {
      ...typography.display2,
    },
  },
});

/**
 * Component wrapping each line of the heading
 * @param {Object} props Destructured props
 * @param {string} title The line's title
 */
const IntroTitle = ({ title, classes }) => (
  <Typography
    component="h1"
    variant="display3"
    className={classes.root}
    paragraph={true}
  >
    {title}
  </Typography>
);

export default withStyles(styles, { withTheme: true })(IntroTitle);
