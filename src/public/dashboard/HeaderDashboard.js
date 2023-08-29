import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {logo} from "../../img";
import {Link} from "react-router-dom";

export default function HeaderDashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="">
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color=""
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon/>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color=""
        >
          <AccountCircle/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          zIndex: 110,
          height: '64px',
        }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color=""
            aria-label="open drawer"
            sx={{mr: 2}}
          >
            <img src={logo} alt="logoImage"/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{display: {xs: 'none', sm: 'block', color: 'black'}, marginRight: '20px', fontSize: '14px'}}
          >
            <Link to="/Main" style={{textDecoration: 'none', color: 'black'}}>
              MAIN
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{display: {xs: 'none', sm: 'block', color: 'black', fontSize: '14px'}}}
          >
            <Link to="/Help" style={{textDecoration: 'none', color: 'black'}}>
              HELP
            </Link>
          </Typography>
          <Box sx={{flexGrow: 1}}/>
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <SearchIcon sx={{color: '#3C8084'}}/>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <SettingsIcon sx={{color: '#3C8084'}}/>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color=""
            >
              <Badge badgeContent={50} color="error">
                <NotificationsIcon sx={{color: '#3C8084'}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color=""
            >
              <AccountCircle sx={{color: '#3C8084'}}/>
            </IconButton>
          </Box>
          <Box sx={{display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color=""
            >
              <MoreIcon sx={{color: '#3C8084'}}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
