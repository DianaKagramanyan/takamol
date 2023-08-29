import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import {logo} from "../../img";
import ContentDashboard from "./dataPanel/ContentDashboard";


const drawerWidth = 240;

export default function ClippedBar() {
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 100,
          [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
        }}
      >
        <Box className="drawer">
          <Box>
            <div>
              <Toolbar/>
            </div>
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
              >
                <AccountCircle sx={{color: 'gray', fontSize: "50px", marginRight: '10px'}}/>
                <Typography sx={{color: 'black'}}>Diana Kagramanyan</Typography>
              </IconButton>
            </Box>

            <Box sx={{overflow: 'auto'}}>
              <List className="list-container">
                {['Data panel', 'Services', 'Positions', 'Requests', 'User guides'].map((text, index) => (
                  <ListItem className="list-item" key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <DesktopWindowsOutlinedIcon sx={{color: '#3C8084', fontSize: "22px"}}/> :
                          <HomeOutlinedIcon sx={{color: '#3C8084', fontSize: "22px"}}/>}
                      </ListItemIcon>

                      <ListItemText>
                        <Typography variant="body2" sx={{ fontSize: "14px", marginLeft: "-20px" }}>
                          {text}
                        </Typography>
                      </ListItemText>

                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>


          <Box className="list-container">
            <Box>
              <IconButton
                size="large"
                edge="start"
                aria-label="open drawer"
                sx={{mr: 2}}
              >
                <img src={logo} alt="logoImage"/>
              </IconButton>
            </Box>
            <Box>
              <Typography sx={{fontSize: "12px"}}>All rights reserved to Rehabilitation and Social
                Guidance</Typography>
              <Typography sx={{fontSize: "12px"}}>Platform | Qualification 2023</Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>


      <ContentDashboard/>

    </Box>
  );
}
