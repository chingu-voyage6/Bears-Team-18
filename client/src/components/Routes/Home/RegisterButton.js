import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  registerBtn: {
    color: 'white',
    fontSize: '2.6em',
    margin: '15px 0',
    padding: '15px 30px',

    '@media screen and (max-width: 767px)': {
      fontSize: '2.2em',
      margin: '5px 0',
    },
  },
};

/**
 * Button linking to log in / sign up page
 * @param {string} title String displayed on the button
 */
const RegisterButton = ({ title, classes, bottom }) => (
  <Button
    component={Link}
    to="/login"
    className={classes.registerBtn}
    variant="contained"
    color="secondary"
    size="large"
    style={{ marginBottom: bottom ? '25px' : false }}
  >
    {title}
  </Button>
);

export default withStyles(styles)(RegisterButton);
