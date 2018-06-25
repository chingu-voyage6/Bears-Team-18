import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    color: '#fff',
    textTransform: 'uppercase',
  },
};

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
