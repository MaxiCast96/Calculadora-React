import React, { useState } from 'react';
import InputField from './InputField';
import CalculateButton from './CalculateButton';
import ResultDisplay from './ResultDisplay';

const CalculatorCard = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [result, setResult] = useState(null);
  
  const handleFirstValueChange = (e) => {
    setFirstValue(e.target.value);
  };
  
  const handleSecondValueChange = (e) => {
    setSecondValue(e.target.value);
  };
  
  const calculate = (operation) => {
    // Convertir valores a numero
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    
    // Validar que ambos valores sean números
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor ingrese valores numéricos válidos');
      return;
    }
    
    // Realizar la operación correspondiente
    let calculatedResult;
    switch (operation) {
      case 'Sumar':
        calculatedResult = num1 + num2;
        break;
      case 'Restar':
        calculatedResult = num1 - num2;
        break;
      case 'Multiplicar':
        calculatedResult = num1 * num2;
        break;
      case 'Dividir':
        if (num2 === 0) {
          alert('No es posible dividir por cero');
          return;
        }
        calculatedResult = num1 / num2;
        break;
      default:
        calculatedResult = 0;
    }
    
    // Actualizar el resultado
    setResult(calculatedResult);
  };
  
  const clearValues = () => {
    setFirstValue('');
    setSecondValue('');
    setResult(null);
  };
  
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Calculadora</h2>
      
      <InputField 
        id="input1" 
        label="Primer valor" 
        placeholder="Ingrese el primer valor"
        value={firstValue}
        onChange={handleFirstValueChange}
      />
      
      <InputField 
        id="input2" 
        label="Segundo valor" 
        placeholder="Ingrese el segundo valor"
        value={secondValue}
        onChange={handleSecondValueChange}
      />
      
      <div className="grid grid-cols-2 gap-2 mb-4">
        <CalculateButton onClick={() => calculate('Sumar')} operation="Sumar" />
        <CalculateButton onClick={() => calculate('Restar')} operation="Restar" />
        <CalculateButton onClick={() => calculate('Multiplicar')} operation="Multiplicar" />
        <CalculateButton onClick={() => calculate('Dividir')} operation="Dividir" />
      </div>
      
      <button
        className="w-full p-3 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        onClick={clearValues}
      >
        Limpiar
      </button>
      
      <ResultDisplay result={result} />
    </div>
  );
};

export default CalculatorCard;