// BeachItem.js
import React from 'react';
import './BeachItem.css'

const BeachItem = ({ item }) => {
  return (
    <li className="beach-item">
      <input type='checkbox' />
      {item}
    </li>
  );
};

export default BeachItem;
