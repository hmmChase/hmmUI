import React from 'react';
import PropTypes from 'prop-types';
// import * as sc from './Button.style';
import './Button.css';

const Button = (props) => (
  <button
    className='button'
    href={props.href}
    target={props.target}
    rel={props.rel}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
};

export { Button };
