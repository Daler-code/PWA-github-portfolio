import React from 'react';
import PropTypes from 'prop-types';

import './link.css';

const Link = ({ url, title }) => (
  <a
    className='App-link'
    href={url}
    target='_blank'
    rel='noopener noreferrer'
  >
    {title}
  </a>
);

export default Link;


Link.propTypes = {
  url: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired
}