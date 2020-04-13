import React from 'react';
import PropTypes from 'prop-types';

const List = ({items}) => (
  <ul>
    {
      items.map(item => 
        <li key={item.label}>
          <strong>{item.label}</strong>{item.value}
        </li>
      )}
  </ul>
);


export default List;

List.propTypes = {
  items: PropTypes.object.isRequired
}