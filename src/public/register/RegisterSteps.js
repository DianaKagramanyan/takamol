import * as React from 'react';
import {TextField, Grid, Paper, styled} from "@mui/material";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function HorizontalLinearAlternativeLabelStepper() {


  return (
    <Paper className="step">
      <Box className="login-input">
        <Box className="log-input">
          <TextField
            id="outlined-basic"
            label="* Email"
            variant="outlined"
          />
        </Box>

        <Box className="log-input">
          <TextField
            id="outlined-basic"
            label="* Password"
            variant="outlined"
          />
        </Box>
        <Box className="log-input">
          <TextField
            id="outlined-basic"
            label="* Password Confirmation"
            variant="outlined"

          />
        </Box>
      </Box>


      <Grid className="two-Buttons" container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
        <Grid item xs={6}>
          <Item
            type="submit"
            sx={{color: "white", backgroundColor: "#3C8084"}}>Sign Up</Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{color: "red", border: ".5px solid red"}}>Cancel order</Item>
        </Grid>
      </Grid>


      <Box sx={{p: 3}} className="after">
        <Link
          to="https://www.hrsd.gov.sa/ar/ministry/about-ministry/policies-strategies/policies/privacy-policy-and-terms-use"
          target="_blank"
          style={{textDecoration: 'none'}}
        >
          <Typography className="small-links">privacy policy</Typography>
        </Link>


        <Typography className="small-text2">Do you have an account on the platform?</Typography>

        <Link to="/login" style={{textDecoration: 'none'}}>
          <Typography className="small-links">sign in</Typography>
        </Link>
      </Box>
    </Paper>


  );
}
