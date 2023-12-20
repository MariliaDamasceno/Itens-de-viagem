
import React from 'react';
import './BeachInfo.css'; 

const BeachInfo = ({ children }) => {
  return (
    <div className="beach-info">
      <h3>Viagem de ferias</h3>
      <p >{children}</p>
    </div>
  );
};

export default BeachInfo;
