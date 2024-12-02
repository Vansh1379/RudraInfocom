import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Testimonal } from './pages/Testimonal'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimonials' element={<Testimonal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
