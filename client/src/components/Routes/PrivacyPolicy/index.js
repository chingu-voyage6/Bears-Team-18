import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import staticAssets from './static';

const styles = {
  privacyContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '40px 16px',
  },
  privacyText: {
    marginBottom: '20px',
  },
};

const PrivacyPolicy = props => {
  function renderPrivacyPolicy(content, classes) {
    return content.map(item => {
      return (
        <section key={item.key}>
          <Typography gutterBottom color="inherit" variant="title">
            {item.title}
          </Typography>
          {item.content.map((par, index) => {
            if (typeof par === 'object') {
              return (
                <ul key={index}>
                  {par.map((li, index) => {
                    return (
                      <li style={{ marginBottom: 8 }} key={index}>
                        {li}
                      </li>
                    );
                  })}
                </ul>
              );
            }

            return (
              <p key={index} className={classes.privacyText}>
                {par}
              </p>
            );
          })}
        </section>
      );
    });
  }

  const { classes } = props;

  return (
    <div className={classes.privacyContainer}>
      <Typography
        align="center"
        variant="display1"
        color="inherit"
        style={{ marginBottom: '40px' }}
      >
        Privacy Policy
      </Typography>
      {renderPrivacyPolicy(staticAssets.privacyPolicy, classes)}
    </div>
  );
};

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrivacyPolicy);
