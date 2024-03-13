import { useState } from "react"


function App() {
 const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg rounded-lg bg-white px-2 py-2"
        >
           <button onClick={()=>setColor("red")} className="outline-none py-1 px-4 text-white rounded-full shadow-lg gap-2" style={{backgroundColor:"red"}}>red</button>
           <button onClick={()=>setColor("green")} className="outline-none py-1 px-4 text-white rounded-full shadow-lg gap-2" style={{backgroundColor:"green"}}>green</button>
           <button  onClick={()=>setColor("blue")} className="outline-none py-1 px-4 text-white rounded-full shadow-lg gap-2" style={{backgroundColor:"blue"}}>blue</button>
           <button onClick={()=>setColor("orange")} className="outline-none py-1 px-4 text-white rounded-full shadow-lg gap-2" style={{backgroundColor:"orange"}}>orange</button>
           <button onClick={()=>setColor("pink")} className="outline-none py-1 px-4 text-white rounded-full shadow-lg gap-2" style={{backgroundColor:"pink"}}>pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
