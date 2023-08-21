import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Nationality and identity',
  'Check Absher',
  'personal information',
  'verification phone',
];

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
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
  );
}
