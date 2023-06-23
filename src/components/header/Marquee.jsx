import React from 'react';
import './Marquee.css';

const Marquee = ({ text }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-text">{text}</div>
    </div>
  );
};

export default Marquee;
