import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import staticAssets from './static';

const styles = {
  privacyContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 16px 40px 16px',
  },
  privacyTitle: {
    textAlign: 'center',
    fontSize: '3.2em',
  },
  privacySubTitle: {
    fontSize: '1.8em',
    margin: '16px 0',
  },
  privacyText: {
    fontSize: '1.6em',
    marginBottom: '24px',
  },
  privacyList: {
    fontSize: '1.6em',
  },
};

const PrivacyPolicy = props => {
  function renderPrivacyPolicy(content, classes) {
    return content.map(item => {
      return (
        <section key={item.key}>
          <h3 className={classes.privacySubTitle}>{item.title}</h3>
          {item.content.map((par, index) => {
            if (typeof par === 'object') {
              return (
                <ul key={index} className={classes.privacyList}>
                  {par.map((li, index) => {
                    return <li key={index}>{li}</li>;
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
      <h2 className={classes.privacyTitle}>Privacy Policy</h2>

      {renderPrivacyPolicy(staticAssets.privacyPolicy, classes)}
    </div>
  );
};

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrivacyPolicy);
