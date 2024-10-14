// Button.tsx

import React, { useState } from 'react';
export const Button: React.FC = () => {
const [count, setCount] = useState(5);

  const IncrementCount = () => {
    setCount((prevCount) => prevCount + 50);
  };

  return (
    <button 
      onClick={IncrementCount} 
      style={{
        padding: '15px 45px',
        fontSize: '24px',
        borderRadius: '0px',
        backgroundColor: 'lightgray',
        color: 'black',
        border: '1px solid black',
        cursor: 'pointer'
      }}
    >
      {count}
    </button>
  );
};

export default Button;