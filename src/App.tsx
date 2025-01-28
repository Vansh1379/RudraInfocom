import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Testimonal } from './pages/Testimonal'
import { Features } from './pages/Features'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <BrowserRouter >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimonials' element={<Testimonal />} />
          <Route path='/features' element={<Features />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
