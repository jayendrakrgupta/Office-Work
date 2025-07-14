import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-white">
    <Header log="Login | Singup" />
    <Footer />
    </div>
  )
}

export default App
