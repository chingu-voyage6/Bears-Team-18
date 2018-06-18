import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (
  <svg width={props.size} height={props.size} viewBox="0 0 24 24">
    <path fill={props.color} d={props.icon} />
  </svg>
);

Icon.defaultProps = {
  color: '#fff',
  size: '24',
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
