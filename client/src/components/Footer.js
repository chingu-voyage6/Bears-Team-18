import React from 'react';

import styled from 'react-emotion';

const FooterEl = styled('footer')`
  width: 100%;
  background-color: blue;
  color: white;
  font-size: 3.2em;
  padding: 25px;
`;

const Footer = () => {
  return <FooterEl>Footer</FooterEl>;
};

export default Footer;
