import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    padding: '0 25px',
  },
};

const Header = props => {
  const { classes } = props;

  return (
    <header className={`${classes.headerContainer} primaryBackground`}>
      <h1>Header</h1>

      <Button className={`secondaryBackground`} variant="raised">
        Example Btn
      </Button>
    </header>
  );
};

export default withStyles(styles)(Header);
