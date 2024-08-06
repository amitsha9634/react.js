import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Amit",
    age: 20
  }

  let myArr = [1, 2, 3]

  return (
    <>

  <Card username="Alice shawn" />  
  <Card username="Sara hex" />

    </>
  )
}

export default App
