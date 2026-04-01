import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route  element={<MainLayout />}>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
