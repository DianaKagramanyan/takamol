import React, {useState} from 'react';
import {TextField, Grid, Paper, styled} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import {Link} from "react-router-dom";
import {auth} from "../../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const LoginInput = () => {

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const onCaptchaChange = () => {
    setIsCaptchaVerified(true);
  }


  return (

    <Box>
      <Grid onSubmit={signIn} container spacing={2} className="login-input">
        <Grid item xs={12} sm={6} className="log-input">
          <TextField
            // id="outlined-basic"
            label="* email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} className="log-input">
          <TextField
            // id="outlined-basic"
            label="* password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>

      {/*<div className="after-captcha">*/}


      <ReCAPTCHA
        sitekey="6Lfoe7gnAAAAAMlBJPyFfwY3VZssC_r2rQGWhUN0"
        onChange={onCaptchaChange}
      />


      <Link to="/forgetpassword" style={{textDecoration: 'none'}}>
        <Typography className="small-links">Forgot you password?</Typography>
      </Link>

      <Grid className="grid-but">

        <Grid className="grid-button" container spacing={3}>
          <Grid item xs={12}>
            <Item
              sx={{
                color: isCaptchaVerified ? "white" : "darkgray", // Change color based on verification
                backgroundColor: isCaptchaVerified ? "#3C8084" : "lightgray", // Change background color based on verification
                cursor: isCaptchaVerified ? "pointer" : "default", // Change cursor based on verification
              }}
              type="submit"
            >
              Next
            </Item>
          </Grid>
        </Grid>

      </Grid>


      <Typography className="small-text">Don't have an account on the platform?</Typography>

      <Link to="/register" style={{textDecoration: 'none'}}>
        <Typography className="small-links">Create a new account</Typography>
      </Link>


      <Link
        to="https://www.hrsd.gov.sa/ar/ministry/about-ministry/policies-strategies/policies/privacy-policy-and-terms-use"
        target="_blank"
        style={{textDecoration: 'none'}}
      >
        <Typography className="small-links">privacy policy</Typography>
      </Link>
      {/*</div>*/}


    </Box>

  )
    ;
};

export default LoginInput;
