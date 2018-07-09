import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from 'react-material-ui-form-validator';

import timezones from '../../timezones';

const styles = {
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
};

class Form extends React.Component {
  state = {
    username: this.props.username,
    email: this.props.email,
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
    );
  }
}

export default withStyles(styles)(Form);
