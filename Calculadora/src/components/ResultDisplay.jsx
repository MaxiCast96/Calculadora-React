import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-md">
      <p className="text-center text-gray-700">
        {result !== null ? `Resultado: ${result}` : 'El resultado se mostrará aquí'}
      </p>
    </div>
  );
};

export default ResultDisplay;