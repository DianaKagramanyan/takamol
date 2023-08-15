import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import PortraitOutlinedIcon from '@mui/icons-material/Portrait';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';


function CustomTabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="All" >

      <Box className="box" sx={{width: '100%'}}>


        <div>
          <Box className="table-center" sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Orphans" {...a11yProps(0)} />
              <Tab label="Persons with disabilities" {...a11yProps(1)} />
              <Tab label="Old People" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </div>


        <div>
          <CustomTabPanel value={value} index={0}>
            <div className="orphans">

              <div className="benefCards">
                <div className="cardS">
                  <Card className="cardService" sx={{minWidth: 275}}>
                    <CardContent className="cardService">
                      <div className="icon">
                        <PortraitOutlinedIcon sx={{fontSize: 80}}/>
                      </div>
                      <Typography className="name1" variant="body2">
                        Social record
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{color: " #3C8084", border: ".5px solid #3C8084"}} variant="outlined" size="small"
                              size="small">GO
                        TO THE SERVICE</Button>
                    </CardActions>
                  </Card>
                </div>
              </div>


              <div className="benefCards">
                <div className="cardS">
                  <Card className="cardService" sx={{minWidth: 275}}>
                    <CardContent className="cardService">
                      <div className="icon">
                        <GroupsOutlinedIcon sx={{fontSize: 80}}/>
                      </div>
                      <Typography className="name1" variant="body2">
                        Application service for the sponsoring and friendly families program
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{color: " #3C8084", border: ".5px solid #3C8084"}} variant="outlined" size="small"
                              size="small">GO
                        TO THE SERVICE</Button>
                    </CardActions>
                  </Card>
                </div>
              </div>

            </div>

          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>

            <div className="benefCards">
              <div className="cardS">
                <Card className="cardService" sx={{minWidth: 275}}>
                  <CardContent className="cardService">
                    <div className="icon">
                      <PortraitOutlinedIcon sx={{fontSize: 80}}/>
                    </div>
                    <Typography className="name1" variant="body2">
                      Social record
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button sx={{color: " #3C8084", border: ".5px solid #3C8084"}} variant="outlined" size="small"
                            size="small">GO
                      TO THE SERVICE</Button>
                  </CardActions>
                </Card>
              </div>
            </div>

          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>

            <div className="benefCards">
              <div className="cardS">
                <Card className="cardService" sx={{minWidth: 275}}>
                  <CardContent className="cardService">
                    <div className="icon">
                      <PortraitOutlinedIcon sx={{fontSize: 80}}/>
                    </div>
                    <Typography className="name1" variant="body2">
                      Social record
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button sx={{color: " #3C8084", border: ".5px solid #3C8084"}} variant="outlined" size="small"
                            size="small">GO
                      TO THE SERVICE</Button>
                  </CardActions>
                </Card>
              </div>
            </div>

          </CustomTabPanel>
        </div>
      </Box>
    </div>
  )
    ;
}
