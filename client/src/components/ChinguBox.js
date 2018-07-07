import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ palette }) => ({
  outer: {
    margin: 'auto',
    padding: '24px 16px',
  },

  inner: {
    minHeight: 320,
    maxWidth: '400px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `3px solid ${palette.secondary.main}`,
    boxShadow: `10px 10px 2px ${palette.secondary.light}`,

    // title
    '& h1:nth-child(1)': {
      width: '100%',
      fontSize: '1.5rem',
      color: palette.secondary.main,
      padding: '24px 8px',
      borderBottom: `3px solid ${palette.secondary.main}`,
    },
  },
});

/**
 * Styled flex container with box shadow and title
 * @param {string} className is applied to inner div
 */
const ChinguBox = ({ children, classes, className }) => (
  <div className={classes.outer}>
    <div className={`${classes.inner} ${className}`}>{children}</div>
  </div>
);

ChinguBox.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles, { withTheme: true })(ChinguBox);
