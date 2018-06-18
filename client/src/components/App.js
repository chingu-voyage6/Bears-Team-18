import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

import Home from './Routes/Home';
import Auth from './Routes/Auth';
import UserDashboard from './Routes/UserDashboard';
import NotFound from './Routes/NotFound';

const styles = {
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontSize: '62.5%',
      fontFamily: 'Raleway, Arial, sans-serif',

      '& .primaryColor': {
        color: '#0f143a',
      },
      '& .primaryBackground': {
        color: 'white',
        backgroundColor: '#0f143a',
      },

      '& .secondaryColor': {
        color: '#15df89',
      },
      '& .secondaryBackground': {
        color: 'white',
        backgroundColor: '#15df89',
      },

      '& .lightLink': {
        color: '#0f143a',
        textDecoration: 'none',
        fontSize: '1.6em',

        '&:hover': {
          color: 'red',
        },
      },
      '& .darkLink': {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.6em',

        '&:hover': {
          color: '#15df89',
        },
      },
    },
  },
};

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={Auth} />
          <Route path="/user-profile" component={UserDashboard} />

          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default withStyles(styles)(App);
