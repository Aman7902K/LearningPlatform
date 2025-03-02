import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Connect_peers from './components/Connect_peers/Connect_peers'
import Class_selector from './components/Class_selector/Class_selector'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Connect_peers/>
      <Class_selector/>
      <Footer/>
    </>
  )
}

export default App
