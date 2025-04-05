import { useState } from 'react';
import './App.css';
import CalculatorCard from './components/CalculatorCard';

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
        <CalculatorCard />
      </div>
    </>
  );
}

export default App;