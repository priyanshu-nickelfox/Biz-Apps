import { createTheme } from '@mui/material/styles';
 
const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#888',
    },
    background: {
      default: 'rgba(15, 16, 17, 1)',
    },
  },
  typography: {
    fontFamily: ['DMSans', 'sans-serif'].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ['DMSans', 'sans-serif'].join(','),
        },
      },
    },
  },
});
 
export default theme;
 