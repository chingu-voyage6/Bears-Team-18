import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    color: '#fff',
    textTransform: 'uppercase',
  },
};

/**
 * Component wrapping each line of the heading
 * @param {Object} props Destructured props
 * @param {string} title The line's title
 * @param {boolean} last Indicate if it's the last line
 */
const IntroTitle = ({ title, classes, last }) => (
  <Typography
    component="h1"
    variant="display1"
    className={classes.root}
    paragraph={true}
    style={{ marginBottom: last ? 'auto' : false }}
  >
    {title}
  </Typography>
);

export default withStyles(styles)(IntroTitle);
