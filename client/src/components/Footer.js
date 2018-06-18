import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <footer className={`primaryBackground`}>
      <h1>Footer</h1>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Footer;
