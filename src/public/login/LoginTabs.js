import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import LoginInput from "./LoginInput";


const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#3C8084',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#6B778C',
          '&.Mui-selected': {
            color: '#3C8084',
          },
        },
      },
    },
  },
});

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

export default function LoginTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{width: '100%'}}>
        <Box className="tabs-center"  sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Service provider" {...a11yProps(0)} />
            <Tab label="My Family Center" {...a11yProps(1)} />
            <Tab label="Beneficiary" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <LoginInput/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
}
