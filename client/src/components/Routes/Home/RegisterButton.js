import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  registerBtn: {
    backgroundColor: '#15df89',
    color: 'white',
    fontSize: '2em',
    fontWeight: '500',
    padding: '15px 50px',
    margin: '15px 0 25px 0',

    '&:hover': {
      backgroundColor: '#68ffb9',
    },
  },
};

const RegisterButton = ({ classes }) => (
  <Link to="/login" className="textDecorationNone">
    <Button className={classes.registerBtn} variant="contained" size="large">
      Register
    </Button>
  </Link>
);

export default withStyles(styles)(RegisterButton);
