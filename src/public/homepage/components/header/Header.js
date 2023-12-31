import '../../../styles/header.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Link, useLocation} from 'react-router-dom';
import {logo} from "../../../../img";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useEffect, useState} from "react";

const pages = ['Main', 'Our Services', 'About', 'Help'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/Main') {
        if (window.scrollY >= 10) {
          setScrolling(false);
        } else {
          setScrolling(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (<AppBar >
    <Container
      className={scrolling ? 'header header-bg' : 'header'}
      maxWidth="100%">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: {xs: 'none', md: 'flex'},
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="logoImage"/>
        </Typography>


        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="black"
          >
            <MenuIcon/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom', horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top', horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: {xs: 'block', md: 'none'},
            }}
          >
            {pages.map((page) => (<MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link style={{textDecoration: 'none', color: 'black'}}
                      to={`/${page}`}>
                  {page}
                </Link>
              </Typography>
            </MenuItem>))}
          </Menu>
        </Box>
        <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
          {pages.map((page) => (<Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{my: 2, color: 'white', display: 'block'}}
          >
            <Link style={{textDecoration: 'none', color: 'black'}} to={`/${page}`}>
              {page}
            </Link>
          </Button>))}
        </Box>
        <div className="search">
          <SearchOutlinedIcon fontSize="large"/>
        </div>
        <div className='button-out'>
          <Link to="/login" style={{textDecoration: 'none'}}>
            <Button sx={{color: " #3C8084", border: ".5px solid #3C8084"}} className='button-out' variant="outlined">Sign
              in</Button>
          </Link>
        </div>
        <div className='button-out'>
          <Link to="/register" style={{textDecoration: 'none'}}>
            <Button sx={{color: "white", backgroundColor: "rgb(60, 128, 132)"}} className='button-cont'
                    variant="contained">Create account</Button>
          </Link>
        </div>
      </Toolbar>
    </Container>
  </AppBar>);
}

export default ResponsiveAppBar;
