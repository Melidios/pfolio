import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  bar: {
    background: '#cfd8dc',
    color: 'white',
    fontWeight: 'bold',
  },
};


class Navbar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseProfile = () => {
    this.setState({ anchorEl: null })
  };
  handleCloseAccount = () => {
    this.setState({ anchorEl: null })
  };
  handleCloseLogOut = () => {
    this.setState({ anchorEl: null })
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="relative" className={classes.bar}>
          <Toolbar>
            <IconButton className={classes.menuButton}            
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
            >
              <MenuIcon />
           
            </IconButton>
            <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleCloseProfile}>Projects</MenuItem>
                  <MenuItem onClick={this.handleCloseAccount}>Bio</MenuItem>
                  <MenuItem onClick={this.handleCloseLogOut} >Contacts</MenuItem>
                </Menu>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
