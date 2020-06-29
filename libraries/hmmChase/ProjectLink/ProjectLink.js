import React from 'react';
import PropTypes from 'prop-types';
// import * as sc from './ProjectLink.style';
import './ProjectLink.css';

const ProjectLink = (props) => (
  <a
    className='project-link'
    href={props.href}
    target='_blank'
    rel='noopener noreferrer'
  >
    {props.children}
  </a>
);

ProjectLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export { ProjectLink };
