import React, {useState} from 'react';
import {TextField, createTheme, ThemeProvider, Grid, Paper, styled} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import {Link} from "react-router-dom";

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

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const onChange = () => {
    setIsCaptchaVerified(true);
  }


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


          <div>
            <ReCAPTCHA
              sitekey="6Lfoe7gnAAAAAMlBJPyFfwY3VZssC_r2rQGWhUN0"
              onChange={onChange}
            />
          </div>

          <Link to="/forgetpassword" style={{textDecoration: 'none'}}>
            <div className="small-links">Forgot you password?</div>
          </Link>

          <div className="grid-but">
            <Grid className="grid-button" container spacing={3}>
              <Grid item xs={12}>
                <Item
                  sx={{
                    color: isCaptchaVerified ? "white" : "darkgray", // Change color based on verification
                    backgroundColor: isCaptchaVerified ? "#3C8084" : "lightgray", // Change background color based on verification
                    cursor: isCaptchaVerified ? "pointer" : "default", // Change cursor based on verification
                  }}
                >
                  Next
                </Item>
              </Grid>
            </Grid>
          </div>

          <div className="small-text">Don't have an account on the platform?</div>

          <Link to="/register" style={{textDecoration: 'none'}}>
            <div className="small-links">Create a new account</div>
          </Link>


          <Link
            to="https://www.hrsd.gov.sa/ar/ministry/about-ministry/policies-strategies/policies/privacy-policy-and-terms-use"
            target="_blank"
            style={{textDecoration: 'none'}}
          >
            <div className="small-links">privacy policy</div>
          </Link>
        </div>

      </div>
    </ThemeProvider>
  );
};

export default LoginInput;
