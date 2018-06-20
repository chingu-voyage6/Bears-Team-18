import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

import Home from './Routes/Home/';
import Auth from './Routes/Auth/';
import FAQ from './Routes/FAQ/';
import PrivacyPolicy from './Routes/PrivacyPolicy/';
import TokenConfig from './Routes/TokenConfig/';
import UserDashboard from './Routes/UserDashboard/';
import NotFound from './Routes/NotFound/';
import ScrollToTop from './ScrollToTop';

const styles = {
  '@global': {
    html: {
      position: 'relative',
      minHeight: '100%',
    },
    body: {
      margin: '0 0 300px',
      padding: '0',
      lineHeight: '1.6',
      fontSize: '62.5%',
      fontFamily: 'Raleway, Arial, sans-serif',

      '& .primaryColor': { color: '#0f143a' },
      '& .primaryBackground': {
        color: 'white',
        backgroundColor: '#0f143a',
      },

      '& .secondaryColor': { color: '#15df89' },
      '& .secondaryBackground': {
        color: 'white',
        backgroundColor: '#15df89',
      },

      '& .lightLink': {
        color: '#0f143a',
        textDecoration: 'none',
        '&:hover': { color: 'red' },
      },
      '& .darkLink': {
        color: 'white',
        textDecoration: 'none',
        '&:hover': { color: '#15df89' },
      },
      '& .textDecorationNone': { textDecoration: 'none' },
    },

    img: { maxWidth: '100%' },

    '@media screen and (max-width: 768px)': {
      body: { margin: '0 0 831px' },
    },
  },
};

const App = () => {
  return (
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

          <Route component={NotFound} />
        </Switch>

        <Footer />
      </ScrollToTop>
    </Router>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
