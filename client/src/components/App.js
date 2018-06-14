import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from './Routes/Home';
import Auth from './Routes/Auth';
import UserDashboard from './Routes/UserDashboard';
import NotFound from './Routes/NotFound';

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

export default App;
