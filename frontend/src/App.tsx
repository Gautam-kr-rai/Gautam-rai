import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster position="top-right" toastOptions={{
            style: {
              background: "#111",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }} />
      <BrowserRouter>
       <Routes>
        <Route  element={<MainLayout />}>
         <Route path='/' element={<Home />} />
         <Route path='/skills_tools' element={<Skills />} />
         <Route path='/experience' element={<Experience />} />
         <Route path='/projects' element={<Projects />} />
         <Route path='/contact' element={<Contact />} />
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
