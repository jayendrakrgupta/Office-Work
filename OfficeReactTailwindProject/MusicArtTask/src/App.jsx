import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import {Signin} from './Components/Signin.jsx'
import {Signup} from './Components/Signup.jsx'
import Home from './Components/Homepage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-white">
    <Header log="Login | Singup" />
    {/* <Signin />
    <Signup />*/}
    <Home />
    <Footer />
    </div>
  )
}

export default App
