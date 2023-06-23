import React from 'react';
import './RunningString.css';

const RunningString = ({ text }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-text">{text}</div>
    </div>
  );
};

export default RunningString;
