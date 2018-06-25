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

const RegisterButton = ({ classes }) => (
  <Button
    component={Link}
    to="/login"
    className={classes.registerBtn}
    variant="contained"
    color="secondary"
    size="large"
  >
    Register
  </Button>
);

export default withStyles(styles)(RegisterButton);
