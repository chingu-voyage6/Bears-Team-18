import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  registerBtn: {
    color: 'white',
    fontSize: '2rem',
  },
};

/**
 * Button linking to log in / sign up page
 * @param {string} title String displayed on the button
 */
const RegisterButton = ({ title, classes }) => (
  <Button
    component={Link}
    to="/login"
    className={classes.registerBtn}
    variant="contained"
    color="secondary"
    size="large"
  >
    {title}
  </Button>
);

export default withStyles(styles)(RegisterButton);
