import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  overrides: {
    MuiInput: {
      input: {
        color: 'green', // Change this to your desired color
      },
    },
  },
});

export default theme;
