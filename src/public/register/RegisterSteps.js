import * as React from 'react';
import {TextField, Grid, Paper, styled, Alert} from "@mui/material";
import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import {useAuth} from "../../contexts/AuthContext";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function HorizontalLinearAlternativeLabelStepper() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwodConfirmRef = useRef();
  const {signup} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !==
      passwodConfirmRef.current.value) {
      return setError('Passwords do not match!')
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Faoled to create an account')
    }
    setLoading(false)
  }


  return (
    <div className="step">

      {error && <Alert variant="danger">{error}</Alert>}

      <form onSubmit={handleSubmit}>
        <div className="login-input">
          <div className="log-input">
            <TextField
              id="outlined-basic"
              label="* Email"
              variant="outlined"
              inputRef={emailRef}

            />
          </div>

          <div className="log-input">
            <TextField
              id="outlined-basic"
              label="* Password"
              variant="outlined"
              inputRef={passwordRef}

            />
          </div>
          <div className="log-input">
            <TextField
              id="outlined-basic"
              label="* Password Confirmation"
              variant="outlined"
              inputRef={passwodConfirmRef}
            />
          </div>
        </div>


        <Grid className="two-Buttons" container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
          <Grid item xs={6}>
            <Item
              disabled={loading}
              sx={{color: "white", backgroundColor: "#3C8084"}}>Sign Up</Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{color: "red", border: ".5px solid red"}}>Cancel order</Item>
          </Grid>
        </Grid>


      </form>


      <div className="after">
        <Link
          to="https://www.hrsd.gov.sa/ar/ministry/about-ministry/policies-strategies/policies/privacy-policy-and-terms-use"
          target="_blank"
          style={{textDecoration: 'none'}}
        >
          <div className="small-links">privacy policy</div>
        </Link>


        <div className="small-text2">Do you have an account on the platform?</div>

        <Link to="/login" style={{textDecoration: 'none'}}>
          <div className="small-links">sign in</div>
        </Link>
      </div>


    </div>


  );
}
