import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, styled} from "@mui/material";
import {Link} from "react-router-dom";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const steps = [
  'Nationality and identity',
  'Check Absher',
  'personal information',
  'verification phone',
];

export default function HorizontalLinearAlternativeLabelStepper() {
  // const [selectedValue, setSelectedValue] = React.useState('a');
  //
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };


  return (
    <div className="step">

      <Box sx={{width: '100%'}}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconProps={{
                  classes: {active: 'orange-step', completed: 'orange-step'},
                }}
              >
                {label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <div>

        <div className="radio-buttons">
          <FormControl>
            <FormLabel className="nationality" id="demo-row-radio-buttons-group-label">* nationality</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio/>} label="Saudi"/>
              <FormControlLabel value="male" control={<Radio/>} label="Non-Saudi"/>
            </RadioGroup>
          </FormControl>
        </div>


        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
          <Grid item xs={6}>
            <Item sx={{color: "white", backgroundColor: "#3C8084"}}>Next</Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{color: "red", border: ".5px solid red"}}>Cancel order</Item>
          </Grid>
        </Grid>

      </div>


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
