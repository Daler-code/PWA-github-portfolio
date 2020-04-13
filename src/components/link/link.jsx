import React from 'react';
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