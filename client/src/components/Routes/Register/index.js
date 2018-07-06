import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import timezones from '../../timezones';

const styles = ({ palette, breakpoints }) => ({
  container: {
    margin: 'auto',
    padding: '24px 16px',
  },

  authContainer: {
    minHeight: 320,
    maxWidth: '400px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `3px solid ${palette.secondary.main}`,
    boxShadow: `10px 10px 2px ${palette.secondary.light}`,
  },

  title: {
    width: '100%',
    fontSize: '1.5rem',
    color: palette.secondary.main,
    padding: '24px 8px',
    borderBottom: `3px solid ${palette.secondary.main}`,
  },

  subtitle: {
    width: '100%',
    padding: '16px',
    margin: 0,
    textAlign: 'center',
    fontWeight: '500',
    borderBottom: `3px solid ${palette.secondary.main}`,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '8px 16px 16px',
    minHeight: 400,
  },

  formItem: {
    width: '240px',
  },
});

class Register extends React.Component {
  // fill state with data from query
  state = {
    username: 'myUsername',
    email: 'email@example.com',
    // validate this on submit
    timezone: {
      label: '',
      timeZoneId: '',
      gmtAdjustment: '',
      useDaylightTime: '',
      value: '',
    },
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleTimezoneChange = event => {
    // get the dataset on the selected option
    const { id, gmt, daylight, value } = event.target.querySelector(
      ':checked'
    ).dataset;
    this.setState({
      timezone: {
        label: event.target.value,
        id,
        gmt,
        daylight,
        value,
      },
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Paper className={classes.authContainer}>
          <Typography
            className={classes.title}
            component="h1"
            align="center"
            variant="title"
          >
            Register
          </Typography>

          <p className={classes.subtitle}>
            Please complete your registration by validating the form below.
          </p>

          {/* FORM */}
          <ValidatorForm
            debounceTime={500}
            className={classes.form}
            onSubmit={this.handleSubmit}
          >
            {/* USERNAME */}
            <TextValidator
              className={classes.formItem}
              id="read-only-input"
              label="Username"
              name="username"
              value={this.state.username}
              helperText="Your GitHub username"
              InputProps={{
                readOnly: true,
              }}
              disabled
              required
              validators={['required']}
              errorMessages={['this field is required']}
            />

            {/* EMAIL */}
            <TextValidator
              className={classes.formItem}
              required
              label="Email"
              onChange={this.handleChange('email')}
              name="email"
              value={this.state.email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />

            {/* TIMEZONE */}
            <FormControl required className={classes.formItem}>
              <InputLabel shrink htmlFor="timezone">
                Timezone
              </InputLabel>
              <NativeSelect
                value={this.state.timezone.label}
                onChange={this.handleTimezoneChange}
                inputProps={{ name: 'timezone' }}
              >
                {timezones}
              </NativeSelect>
            </FormControl>

            {/* SUBMIT */}
            <Button
              color="secondary"
              variant="contained"
              size="large"
              type="submit"
              style={{ color: '#fff' }}
            >
              Submit
            </Button>
          </ValidatorForm>
        </Paper>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Register);
