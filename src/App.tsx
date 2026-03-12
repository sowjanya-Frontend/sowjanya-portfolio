import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import  Home  from './pages/Home'
import Projects  from './pages/Projects'
import Contact from './pages/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
     <Navbar />

    <main>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />

     </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
