import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from 'react-material-ui-form-validator';

import ChinguBox from '../../ChinguBox';
import timezones from '../../timezones';

const styles = ({ palette }) => ({
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
    username: '',
    email: '',
    timezone: {
      label: '',
      useDaylightTime: false,
      value: 0,
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
    const { daylight, value } = event.target.querySelector(':checked').dataset;
    this.setState({
      timezone: {
        label: event.target.value,
        daylight: Boolean(Number(daylight)),
        value: Number(value),
      },
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <ChinguBox>
        <Typography component="h1" align="center" variant="title">
          Register
        </Typography>

        <p className={classes.subtitle}>
          Please complete your registration by validating the form below.
        </p>

        {/* FORM */}
        <ValidatorForm
          debounceTime={300}
          className={classes.form}
          onSubmit={this.handleSubmit}
        >
          {/* USERNAME */}
          <TextValidator
            className={classes.formItem}
            id="read-only-input"
            label="Username"
            InputLabelProps={{
              htmlFor: 'username',
            }}
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
            InputLabelProps={{
              htmlFor: 'email',
            }}
            onChange={this.handleChange('email')}
            name="email"
            value={this.state.email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />

          {/* TIMEZONE */}
          <SelectValidator
            className={classes.formItem}
            required
            label="Timezone"
            InputLabelProps={{
              shrink: true,
              htmlFor: 'timezone',
            }}
            name="timezone"
            value={this.state.timezone.label}
            onChange={this.handleTimezoneChange}
            SelectProps={{ native: true }}
            validators={['required']}
            errorMessages={['this field is required']}
          >
            {timezones}
          </SelectValidator>

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
      </ChinguBox>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Register);
