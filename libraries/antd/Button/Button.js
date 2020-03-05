import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton } from 'antd';
// import * as sc from './Button.style';
// import './Button.css';

const Button = props => <AntButton type='primary'>{props.children}</AntButton>;

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export { Button };
