import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

class TokenConfig extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    if (this.props.location.search !== '') {
      let token = this.props.location.search.replace('?token=', '');
      localStorage.setItem('AUTH_TOKEN', token);
      this.props.history.push('/user-dashboard');
      return;
    }

    this.props.history.push('/login');
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </div>
    );
  }
}

export default TokenConfig;
