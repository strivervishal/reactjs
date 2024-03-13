import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-3xl rounded-3xl font-bold underline bg-red-500 mb-5">
      Hello world!
    </h1>
    <h3 ></h3>
    <Card username="vishal pandey" click= "explore me" />
    <Card username="vivek pandey"  />
    {/* <Card username="vishal pandey" click = ""/>
    <Card username="vivek pandey" click ="" /> */}
    </>
  )
}

export default App
