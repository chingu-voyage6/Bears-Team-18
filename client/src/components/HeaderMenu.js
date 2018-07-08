import React from 'react';
import { Link } from 'react-router-dom';
// MUI
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// ICONS
import HamburgerMenu from 'mdi-material-ui/Menu';
import Medium from 'mdi-material-ui/Medium';
import AccountCircle from 'mdi-material-ui/AccountCircle';

const styles = ({ palette, breakpoints, typography }) => ({
  container: {
    marginLeft: 'auto',
    [breakpoints.up('sm')]: {
      display: 'none',
      margin: 0,
    },
  },

  btnDark: {
    color: '#fff',
    '&:hover': {
      color: palette.secondary.main,
    },
  },

  btnWhite: {
    color: 'rgba(0, 0, 0, 0.87)',
    '&:hover': {
      backgroundColor: palette.primary.main,
      color: '#fff',
    },
  },

  menu: {
    '& ul': {
      padding: 8,
    },
    '& a': {
      borderRadius: '2px',
    },
    '& a > *': {
      color: 'rgba(0, 0, 0, 0.87)',
    },
    '& a:hover': {
      backgroundColor: palette.primary.main,
      '& *': {
        color: '#fff',
      },
    },
  },

  text: {
    ...typography.button,
    '& span': {
      fontWeight: 500,
    },
  },
});

class HeaderMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, variant } = this.props;

    return (
      <div className={classes.container}>
        {/* ICON BUTTON */}
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={variant === 'dark' ? classes.btnDark : classes.btnWhite}
          disableRipple
        >
          <HamburgerMenu style={{ fontSize: 32 }} />
        </IconButton>

        {/* POPOVER MENU */}
        <Menu
          className={classes.menu}
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            component="a"
            href="https://medium.com/chingu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleClose}
            disableRipple
          >
            <ListItemIcon>
              <Medium />
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Blog" />
          </MenuItem>

          <MenuItem
            component={Link}
            to="/login"
            onClick={this.handleClose}
            disableRipple
          >
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Log In" />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HeaderMenu);
