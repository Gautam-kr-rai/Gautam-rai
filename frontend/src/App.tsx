import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route  element={<MainLayout />}>
         <Route path='/' element={<Home />} />
         <Route path='/skills_tools' element={<Skills />} />
         <Route path='/projects' element={<Projects />} />
         <Route path='/contact' element={<Contact />} />
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
