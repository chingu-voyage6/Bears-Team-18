import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

import Home from './Routes/Home';
import Auth from './Routes/Auth';
import UserDashboard from './Routes/UserDashboard';
import NotFound from './Routes/NotFound';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0f143a',
    },
    secondary: {
      main: '#15df89',
    },
  },
});

const styles = {
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontSize: '62.5%',
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
    },
  },
};

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={Auth} />
          <Route path="/user-profile" component={UserDashboard} />

          <Route component={NotFound} />
        </Switch>

        <Footer />
      </MuiThemeProvider>
    </Router>
  );
};

export default withStyles(styles, { withTheme: true })(App);
