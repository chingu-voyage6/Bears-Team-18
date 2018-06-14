import React from 'react';

import styled from 'react-emotion';

const HeaderEl = styled('header')`
  width: 100%;
  background-color: red;
  color: white;
  font-size: 3.2em;
  padding: 25px;
`;

const Header = () => {
  return <HeaderEl>Header</HeaderEl>;
};

export default Header;
