import React from 'react';
import InputField from './InputField';
import CalculateButton from './CalculateButton';
import ResultDisplay from './ResultDisplay';

const CalculatorCard = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Calculadora</h2>
      
      <InputField 
        id="input1" 
        label="Primer valor" 
        placeholder="Ingrese el primer valor" 
      />
      
      <InputField 
        id="input2" 
        label="Segundo valor" 
        placeholder="Ingrese el segundo valor" 
      />
      
      <CalculateButton />
      
      <ResultDisplay />
    </div>
  );
};

export default CalculatorCard;