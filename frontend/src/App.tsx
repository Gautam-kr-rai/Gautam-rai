import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route  element={<MainLayout />}>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/projects' element={<Projects />} />
         <Route path='/contact' element={<Contact />} />
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
