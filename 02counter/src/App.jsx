import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  //  Hook  method in react by which we set default value 
  // it wants two value first variable and second function in array format
 let [counter,setCounter] = useState(15);
 const addValue = ()=>{
  if (counter > 20) {
    alert("counter is greater than : 20")
    return counter
  }
  // console.log("clicked" , counter,Math.random());
  counter = counter +1;
  // call setcounter method
  setCounter(counter) ;
 }
 const removeValue =  ()=>{
  if (counter == 0) {
    alert("counter less than : 0")
    return counter;
  }
  setCounter(counter - 1)
 }
  return (
   <>
   <h2>counter value:{counter}</h2>
   <button onClick={addValue}> add</button>
   <br />
   <button onClick={removeValue}> remove</button>
   {/* <footer>increment value : {counter}</footer> */}
   
   </>
  )
}

export default App
