import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#3a3965',
      main: '#0f143a',
      dark: '#000016',
    },
    secondary: {
      light: '#68ffb9',
      main: '#15df89',
      dark: '#00ac5b',
    },
  },
  typography: {
    display4: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 400,
    },
    display3: {
      fontFamily: '"Raleway", sans-serif',
    },
    display2: {
      fontFamily: '"Raleway", sans-serif',
    },
    display1: {
      fontFamily: '"Raleway", sans-serif',
    },
    title: {
      fontFamily: '"Raleway", sans-serif',
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: 1,
    },
  },
  spacing: {
    0: 0,
    1: '4px',
    2: '8px',
    3: '16px',
    4: '32px',
    5: '64px',
    6: '128px',
    7: '256px',
  },
});
