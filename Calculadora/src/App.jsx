import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalculatorCard from './components/CalculatorCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <CalculatorCard />
    </div>
    </>
  )
}

export default App
