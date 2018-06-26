import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#3a3965',
      main: '#0f143a',
      dark: '#000016',
    },
    secondary: {
      light: '#52efac',
      main: '#15df89',
      dark: '#00ac5b',
    },
  },
  typography: {
    htmlFontSize: 10,
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
    },
  },
});
