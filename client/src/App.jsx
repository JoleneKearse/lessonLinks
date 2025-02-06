import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const grades = ['1st', '2nd', '3rd'];
  ]
  return (
    <>
      <dropdown options={grades} />
      <dropdown options={['A', 'B', 'C']} />
    </>
  )
}

export default App

