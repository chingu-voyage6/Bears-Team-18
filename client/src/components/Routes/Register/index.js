import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import ChinguBox from '../../ChinguBox';
import Form from './Form';

const styles = ({ palette }) => ({
  subtitle: {
    width: '100%',
    padding: '16px',
    margin: 0,
    textAlign: 'center',
    fontWeight: '500',
    borderBottom: `3px solid ${palette.secondary.main}`,
  },
});

const Register = ({ classes }) => (
  <ChinguBox>
    <Typography component="h1" align="center" variant="title">
      Register
    </Typography>

    <p className={classes.subtitle}>
      Please complete your registration by validating the form below.
    </p>

    <Query
      query={gql`
        {
          getUser {
            username
            email
            status
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <CircularProgress size={50} color="secondary" />;
        if (error) return <p>{error.message}</p>;
        return (
          <Form
            username={data.getUser.username}
            email={data.getUser.email || ''}
          />
        );
      }}
    </Query>
  </ChinguBox>
);

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Register);
