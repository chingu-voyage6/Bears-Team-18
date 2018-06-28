import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import Header from './Header';
import Footer from './Footer';

import Home from './Routes/Home/';
import Auth from './Routes/Auth/';
import FAQ from './Routes/FAQ/';
import PrivacyPolicy from './Routes/PrivacyPolicy/';
import TokenConfig from './Routes/TokenConfig/';
import UserDashboard from './Routes/UserDashboard/';
import ErrorPage from './Routes/Error/';
import ScrollToTop from './ScrollToTop';

const styles = theme => ({
  '@global': {
    html: {
      position: 'relative',
      minHeight: '100%',
    },
    body: {
      margin: '0 0 262px',
      padding: '0',
      fontFamily: theme.typography.fontFamily,
    },

    img: { maxWidth: '100%' },

    '@media screen and (max-width: 768px)': {
      body: { margin: '0 0 706px' },
    },
  },
});

const App = props => {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <Router>
          <ScrollToTop>
            <Header />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Auth} />
              <Route path="/faq" component={FAQ} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/token" component={TokenConfig} />
              <Route path="/user-dashboard" component={UserDashboard} />

              <Route
                render={routeProps => (
                  <ErrorPage
                    {...routeProps}
                    title="404 Error - URL Not Found"
                  />
                )}
              />
            </Switch>

            <Footer />
          </ScrollToTop>
        </Router>
      </MuiThemeProvider>
    </CssBaseline>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
