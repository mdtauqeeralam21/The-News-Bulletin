// YourComponent.js
import React from 'react';

const YourComponent = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
