import React from 'react';
import {TextField, createTheme, ThemeProvider, Grid, Paper, styled} from "@mui/material";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover $notchedOutline': {
            borderColor: 'green',
          },
          '&$focused $notchedOutline': {
            borderColor: 'green',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&$focused': {
            color: 'green',
          },
        },
      },
    },
  },
});

const LoginInput = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="login-input">
          <div className="log-input">
            <TextField
              id="outlined-basic"
              label="* ID/Iqama Number or Email"
              variant="outlined"/>
          </div>

          <div className="log-input">
            <TextField
              id="outlined-basic"
              label="* password"
              variant="outlined"/>
          </div>
        </div>

        <div className="after-captcha">


          <div>CAPTCHA</div>
          <div className="small-links">Forgot you password?</div>
          <div className="grid-but">
            <Grid className="grid-button" container spacing={3}>
              <Grid item xs={12}>
                <Item>Next</Item>
              </Grid>
            </Grid>
          </div>

          <div className="small-text">Don't have an account on the platform?</div>
          <div className="small-links">Create a new account</div>
          <div className="small-links">privacy policy</div>
        </div>

      </div>
    </ThemeProvider>
  );
};

export default LoginInput;
