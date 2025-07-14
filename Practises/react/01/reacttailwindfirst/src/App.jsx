import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color}}>
        <div className="flex flex-row flex-wrap items-center justify-center w-full h-screen gap-1">
          <button onClick={()=> setColor("blue")} className='bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 gap-1 ' > blue </button>
          <button onClick={()=> setColor("orange")} className='bg-orange-500 text-white  py-2 px-4 rounded hover:bg-orange-700 gap-1'> orange </button>
          <button onClick={()=> setColor("red")} className='bg-red-500 text-white  py-2 px-4 rounded hover:bg-red-700'>red</button>
          <button onClick={()=> setColor("green")} className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700'>green</button>
        </div>
      </div>      
    </>
  )
}

export default App
