import React from 'react';

const CalculateButton = ({ onClick, operation }) => {
  return (
    <button
      className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-2"
      onClick={onClick}
    >
      {operation}
    </button>
  );
};

export default CalculateButton;