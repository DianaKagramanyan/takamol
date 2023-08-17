import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material/styles';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import theme from './public/help/Theme'; // Import the theme you created


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>,
  </BrowserRouter>
);


