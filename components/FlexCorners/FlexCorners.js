import React from 'react';
// import PropTypes from 'prop-types';
import * as sc from './FlexCorners.style';

const FlexCorners = props => (
  <sc.Container>
    <span style={{ backgroundColor: 'red' }}>top-left</span>
    <span style={{ backgroundColor: 'green' }}>top-right</span>
    <span style={{ backgroundColor: 'blue' }}>bottom-left</span>
    <span style={{ backgroundColor: 'yellow' }}>bottom-right</span>
  </sc.Container>
);

// FlexCorners.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(FlexCorners);
