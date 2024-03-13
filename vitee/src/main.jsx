import React from 'react'
import ReactDOM from 'react-dom/client'
import Chai from './chai.jsx'
import App from './App.jsx'
// use own function 
function MyApp(){
    const userName = 'vishalpandey'
    return(
        <div>
            <h1>custom react user {userName} !</h1> 
        </div>
    )
}
// how to create props in react 
const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)
const reactElement = React.createElement('a',{href:'https://google.com',target:'_blank'},"click me to visit")

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    <Chai />
    // due to function we can also execute using fun call
    // MyApp()
    // reactElement
    // anotherElement

)
