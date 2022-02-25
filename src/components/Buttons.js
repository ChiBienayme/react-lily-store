import React from 'react';

const Button = ({ sign, index, handleCount }) => {
  return (
    <div>
      {sign === "decrement" ? 
        <button 
          type="button" 
          className="btn btn-outline-success" 
          onClick={() => handleCount(index, 1)}
        >
          +
        </button>
      :
        <button 
          type="button" 
          className="btn btn-outline-warning" 
          onClick={() => handleCount(index, -1)}
        >
          -
        </button>
      }
    </div>
  )
}

export default Button;